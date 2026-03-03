import { useState } from "react";
import Section from "@/components/common/Section";
import { FaSearch, FaCheckCircle, FaUser, FaCalendarAlt } from "react-icons/fa";
import { contactService } from "@/features/contact/services/contactService";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";

/**
 * MessageTracker Component
 *
 * Lets users look up the status of a previously sent contact message by ticket ID.
 * Pure Tailwind — no BEM abstraction.
 *
 * @component
 * @returns {React.JSX.Element}
 */
const MessageTracker = () => {
  const [ticketId, setTicketId] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setStatus(null);
    try {
      const data = await contactService.checkStatus(ticketId);
      setStatus(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resultLabel =
    "block text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1";

  const resultValue = "font-medium text-gray-800 dark:text-gray-200 text-base";

  const iconWrapperBase = "p-3 rounded-full shadow-sm";

  return (
    <Section title="Rastrea tu Mensaje" bgVariant="gray" id="tracker">
      <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl mx-auto items-start">
        {/* Search Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 flex flex-col justify-center h-full transition-all duration-300">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-white uppercase tracking-wider">
            Consultar Estado
          </h3>
          <form onSubmit={handleSearch} className="flex flex-col gap-4 mb-6">
            <Input
              id="ticketId"
              value={ticketId}
              onChange={(e) => setTicketId(e.target.value)}
              placeholder="CÓDIGO (EJ. ABC-123)"
              className="text-center text-lg tracking-widest uppercase font-mono"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-95 duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {loading ? (
                "Buscando..."
              ) : (
                <>
                  <FaSearch />
                  <span>Rastrear</span>
                </>
              )}
            </button>
          </form>
          {error && (
            <div className="p-4 mt-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-center text-sm font-medium border border-red-100 dark:border-red-800">
              {error}
            </div>
          )}
        </div>

        {/* Result Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 flex flex-col justify-center h-full transition-all duration-300">
          {status ? (
            /* Loaded state */
            <div>
              <div className="flex items-center gap-4 mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                <FaCheckCircle className="text-3xl text-green-500" />
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-lg">
                    Ticket Encontrado
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                    ID: {status.id}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4 p-3 rounded-lg">
                  <div
                    className={cn(
                      iconWrapperBase,
                      "bg-blue-50 dark:bg-gray-700",
                    )}
                  >
                    <FaUser className="text-blue-500" />
                  </div>
                  <div>
                    <span className={resultLabel}>Solicitante</span>
                    <span className={resultValue}>{status.nombre}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg">
                  <div
                    className={cn(
                      iconWrapperBase,
                      "bg-blue-50 dark:bg-gray-700",
                    )}
                  >
                    <FaCalendarAlt className="text-purple-500" />
                  </div>
                  <div>
                    <span className={resultLabel}>Fecha</span>
                    <span className={resultValue}>{status.fecha}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Estado:
                  </span>
                  <span
                    className={cn(
                      "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm",
                      status.estado === "Recibido"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800",
                    )}
                  >
                    {status.estado}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* Ghost/placeholder state */
            <div className="opacity-50 select-none">
              <div className="flex items-center gap-4 mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                <div
                  className={cn(
                    iconWrapperBase,
                    "bg-gray-200 dark:bg-gray-700 text-gray-400",
                  )}
                >
                  <FaCheckCircle />
                </div>
                <div>
                  <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
                  <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { Icon: FaUser, label: "Solicitante", id: "user" },
                  { Icon: FaCalendarAlt, label: "Fecha", id: "date" },
                ].map(({ Icon, label, id }) => (
                  <div
                    key={`sk-field-${id}`}
                    className="flex items-center gap-4 p-3 rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 opacity-60"
                  >
                    <div
                      className={cn(
                        iconWrapperBase,
                        "bg-gray-200 dark:bg-gray-700 text-gray-400",
                      )}
                    >
                      <Icon />
                    </div>
                    <div>
                      <span className={resultLabel}>{label}</span>
                      <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Estado:
                  </span>
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-400">
                    Pendiente
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default MessageTracker;
