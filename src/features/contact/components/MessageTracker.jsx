import { useState } from "react";
import Section from "@/components/common/Section";
import { FaSearch, FaCheckCircle, FaUser, FaCalendarAlt } from "react-icons/fa";
import { contactService } from "@/features/contact/services/contactService";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/Button";

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
    <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl mx-auto items-start">
      {/* Search Panel */}
      <div className="bg-surface-base rounded-2xl shadow-lg border border-separator p-6 flex flex-col justify-center h-full transition-all duration-300">
        <h3 className="text-xl font-bold mb-6 text-center text-content-main uppercase tracking-wider">
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
          <Button
            type="submit"
            isLoading={loading}
            icon={FaSearch}
          >
            Rastrear
          </Button>
        </form>        {error && (
          <div className="p-4 mt-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-center text-sm font-medium border border-red-100 dark:border-red-800">
            {error}
          </div>
        )}
      </div>

      {/* Result Panel */}
      <div className="bg-surface-base rounded-2xl shadow-lg border border-separator p-6 flex flex-col justify-center h-full transition-all duration-300">
        {status ? (
          /* Loaded state */
          <div>
            <div className="flex items-center gap-4 mb-6 border-b border-separator pb-4">
              <FaCheckCircle className="text-3xl text-green-500" />
              <div>
                <h4 className="font-bold text-content-main text-lg">
                  Ticket Encontrado
                </h4>
                <p className="text-xs text-content-muted font-mono">
                  ID: {status.id}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-3 rounded-lg">
                <div
                  className={cn(
                    iconWrapperBase,
                    "bg-surface-elevated text-brand-primary",
                  )}
                >
                  <FaUser />
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
                    "bg-surface-elevated text-purple-500",
                  )}
                >
                  <FaCalendarAlt />
                </div>
                <div>
                  <span className={resultLabel}>Fecha</span>
                  <span className={resultValue}>{status.fecha}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-separator">
              <div className="flex justify-between items-center bg-surface-elevated p-4 rounded-lg">
                <span className="text-sm font-medium text-content-muted">
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
            <div className="flex items-center gap-4 mb-6 border-b border-separator pb-4">
              <div
                className={cn(
                  iconWrapperBase,
                  "bg-surface-elevated text-content-muted",
                )}
              >
                <FaCheckCircle />
              </div>
              <div>
                <div className="h-5 w-32 bg-surface-elevated rounded animate-pulse mb-2" />
                <div className="h-3 w-20 bg-surface-elevated rounded animate-pulse" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { Icon: FaUser, label: "Solicitante", id: "user" },
                { Icon: FaCalendarAlt, label: "Fecha", id: "date" },
              ].map(({ Icon, label, id }) => (
                <div
                  key={`sk-field-${id}`}
                  className="flex items-center gap-4 p-3 rounded-lg border border-separator bg-surface-elevated/50 opacity-60"
                >
                  <div
                    className={cn(
                      iconWrapperBase,
                      "bg-surface-elevated text-content-muted",
                    )}
                  >
                    <Icon />
                  </div>
                  <div>
                    <span className={resultLabel}>{label}</span>
                    <div className="h-5 w-32 bg-surface-elevated rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-separator">
              <div className="flex justify-between items-center bg-surface-elevated p-4 rounded-lg">
                <span className="text-sm font-medium text-content-muted">
                  Estado:
                </span>
                <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm bg-surface-elevated text-content-muted">
                  Pendiente
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageTracker;
