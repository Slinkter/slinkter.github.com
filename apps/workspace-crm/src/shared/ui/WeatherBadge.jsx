import { useState, useEffect, memo } from "react";

/**
 * @fileoverview Widget de clima corporativo para el header principal.
 * Muestra las condiciones meteorológicas de la sede central (Madrid HQ)
 * con fallback instantáneo y elegante en caso de offline o rate-limiting.
 */
const WeatherBadge = memo(() => {
    const [weather, setWeather] = useState({
        temp: "21°C",
        condition: "Despejado",
        icon: "☀️",
        city: "Madrid HQ",
    });

    useEffect(() => {
        let isMounted = true;
        const fetchWeather = async () => {
            try {
                const res = await fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=40.4168&longitude=-3.7038&current=temperature_2m,weather_code",
                    { signal: AbortSignal.timeout ? AbortSignal.timeout(3000) : undefined }
                );
                if (!res.ok) return;
                const data = await res.json();
                if (!isMounted || !data?.current) return;

                const temp = `${Math.round(data.current.temperature_2m)}°C`;
                const code = data.current.weather_code;
                let condition = "Despejado";
                let icon = "☀️";

                if (code >= 1 && code <= 3) {
                    condition = "Parcialmente Nublado";
                    icon = "⛅";
                } else if (code >= 45 && code <= 48) {
                    condition = "Niebla";
                    icon = "🌫️";
                } else if (code >= 51 && code <= 67) {
                    condition = "Lluvia";
                    icon = "🌧️";
                } else if (code >= 71) {
                    condition = "Nieve / Tormenta";
                    icon = "❄️";
                }

                setWeather({ temp, condition, icon, city: "Madrid HQ" });
            } catch {
                // Silently fallback to default pleasant weather
            }
        };

        fetchWeather();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-xs"
            title={`Sede Central Corporativa: ${weather.city} — ${weather.condition}`}
            aria-label={`Clima en sede corporativa: ${weather.temp}, ${weather.condition}`}
        >
            <span className="text-sm" aria-hidden="true">{weather.icon}</span>
            <span className="font-semibold text-slate-900 dark:text-white font-mono">{weather.temp}</span>
            <span className="hidden sm:inline text-slate-500 dark:text-slate-400 text-[11px] font-sans">
                {weather.city}
            </span>
        </div>
    );
});

WeatherBadge.displayName = "WeatherBadge";

export default WeatherBadge;
