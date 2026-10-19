import { useState, useEffect, useMemo, memo } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersList } from "@/entities/user/store/user.thunks";
import { selectMemoizedUserList } from "@/entities/user/store/userSlice";
import { cn } from "@/shared/lib/utils";

/**
 * @fileoverview Panel de Directorio Rápido de Usuarios (Integración de Features 02 + 04).
 * Permite filtrar el catálogo completo de colaboradores por Nombre o Correo Electrónico
 * y seleccionarlo con un solo clic.
 */
const UserDirectoryPanel = memo(({ onSelectUser, selectedUserId }) => {
    const dispatch = useDispatch();
    const users = useSelector(selectMemoizedUserList);
    const [filterQuery, setFilterQuery] = useState("");

    useEffect(() => {
        if (!users || users.length === 0) {
            dispatch(fetchUsersList());
        }
    }, [dispatch, users]);

    // Filtrado interactivo por Nombre Y Correo Electrónico (Fix de bug de Project 04)
    const filteredUsers = useMemo(() => {
        if (!filterQuery.trim()) return users;
        const q = filterQuery.toLowerCase().trim();
        return users.filter((u) => {
            const nameMatch = u.name?.toLowerCase().includes(q);
            const emailMatch = u.email?.toLowerCase().includes(q);
            const usernameMatch = u.username?.toLowerCase().includes(q);
            return nameMatch || emailMatch || usernameMatch;
        });
    }, [users, filterQuery]);

    return (
        <section
            className="w-full max-w-4xl mx-auto my-golden-lg p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-label="Directorio Rápido de Colaboradores"
        >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                        <span>👥 Directorio Rápido de Usuarios</span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
                            {filteredUsers.length} disponibles
                        </span>
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Haz clic en cualquier usuario para cargar su perfil corporativo y publicaciones.
                    </p>
                </div>

                <div className="w-full sm:w-64">
                    <input
                        type="search"
                        placeholder="Filtrar por nombre o email..."
                        value={filterQuery}
                        onChange={(e) => setFilterQuery(e.target.value)}
                        className="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                        aria-label="Filtrar directorio por nombre o correo"
                    />
                </div>
            </div>

            {filteredUsers.length === 0 ? (
                <p className="text-xs text-center py-4 text-slate-400">
                    No se encontraron usuarios que coincidan con &ldquo;{filterQuery}&rdquo;.
                </p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 max-h-56 overflow-y-auto pr-1">
                    {filteredUsers.map((u) => {
                        const isSelected = selectedUserId === u.id;
                        return (
                            <button
                                key={u.id}
                                type="button"
                                onClick={() => onSelectUser(u.id)}
                                className={cn(
                                    "flex flex-col items-start p-2.5 rounded-xl border text-left transition-all cursor-pointer",
                                    isSelected
                                        ? "bg-blue-50 dark:bg-blue-950/60 border-blue-500 ring-2 ring-blue-500/30"
                                        : "bg-slate-50 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/60 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-white dark:hover:bg-slate-800"
                                )}
                            >
                                <div className="flex items-center justify-between w-full mb-1">
                                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center">
                                        {u.name?.charAt(0) || "U"}
                                    </span>
                                    <span className="font-mono text-[10px] font-semibold text-slate-400">
                                        #{u.id}
                                    </span>
                                </div>
                                <span className="text-xs font-bold text-slate-900 dark:text-white truncate w-full">
                                    {u.name}
                                </span>
                                <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate w-full font-mono">
                                    {u.email}
                                </span>
                            </button>
                        );
                    })}
                </div>
            )}
        </section>
    );
});

UserDirectoryPanel.displayName = "UserDirectoryPanel";

UserDirectoryPanel.propTypes = {
    onSelectUser: PropTypes.func.isRequired,
    selectedUserId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default UserDirectoryPanel;
