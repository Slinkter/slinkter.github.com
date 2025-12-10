import { useState } from "react";
import Section from "./Section"; // Importamos Section
import { FaSearch, FaCheckCircle, FaUser, FaCalendarAlt } from "react-icons/fa";
import { contactService } from "../api/contactService";

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

    return (
        <Section
            title="Rastrea tu Mensaje"
            bgClass="section--gray"
            id="tracker"
        >
            <div className="contact__grid">
                {/* Card 1: Búsqueda (Izquierda - Estilo Info) */}
                <div className="contact__info">
                    <h3 className="tracker__title">Consultar Estado</h3>

                    <form onSubmit={handleSearch} className="tracker__form">
                        <input
                            type="text"
                            value={ticketId}
                            onChange={(e) => setTicketId(e.target.value)}
                            placeholder="CÓDIGO (EJ. ABC-123)"
                            className="contact__input text-center tracking-widest uppercase"
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="contact__button group"
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

                    {error && <div className="tracker__error">{error}</div>}
                </div>

                {/* Card 2: Resultado (Derecha - Estilo Form Container) */}
                <div className="contact__form-container">
                    {status ? (
                        // Estado Cargado: Información Real
                        <div className="animate-fade-in">
                            <div className="tracker__result-header">
                                <FaCheckCircle className="text-3xl text-green-500" />
                                <div>
                                    <h4 className="tracker__result-title">
                                        Ticket Encontrado
                                    </h4>
                                    <p className="tracker__result-id">
                                        ID: {status.id}
                                    </p>
                                </div>
                            </div>

                            <div className="tracker__result-grid">
                                <div className="tracker__result-item">
                                    <div className="tracker__result-icon-wrapper">
                                        <FaUser className="text-blue-500" />
                                    </div>
                                    <div>
                                        <span className="tracker__result-label">
                                            Solicitante
                                        </span>
                                        <span className="tracker__result-value">
                                            {status.nombre}
                                        </span>
                                    </div>
                                </div>

                                <div className="tracker__result-item">
                                    <div className="tracker__result-icon-wrapper">
                                        <FaCalendarAlt className="text-purple-500" />
                                    </div>
                                    <div>
                                        <span className="tracker__result-label">
                                            Fecha
                                        </span>
                                        <span className="tracker__result-value">
                                            {status.fecha}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="tracker__result-footer">
                                <div className="tracker__result-status-wrapper">
                                    <span className="tracker__result-status-label">
                                        Estado:
                                    </span>
                                    <span
                                        className={`tracker__result-status-badge ${
                                            status.estado === "Recibido"
                                                ? "tracker__result-status-badge--received"
                                                : "tracker__result-status-badge--processing"
                                        }`}
                                    >
                                        {status.estado}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Estado Inicial: Ghost / Placeholder
                        <div className="opacity-50 select-none">
                            <div className="tracker__result-header border-gray-100 dark:border-gray-700">
                                <div className="tracker__result-icon-wrapper tracker__result-icon-wrapper--disabled">
                                    <FaCheckCircle />
                                </div>
                                <div>
                                    <div className="tracker__result-value tracker__result-value--placeholder mb-2"></div>
                                    <div className="tracker__result-value tracker__result-value--placeholder w-20 h-3"></div>
                                </div>
                            </div>

                            <div className="tracker__result-grid">
                                <div className="tracker__result-item tracker__result-item--disabled">
                                    <div className="tracker__result-icon-wrapper tracker__result-icon-wrapper--disabled">
                                        <FaUser />
                                    </div>
                                    <div>
                                        <span className="tracker__result-label">
                                            Solicitante
                                        </span>
                                        <div className="tracker__result-value tracker__result-value--placeholder"></div>
                                    </div>
                                </div>

                                <div className="tracker__result-item tracker__result-item--disabled">
                                    <div className="tracker__result-icon-wrapper tracker__result-icon-wrapper--disabled">
                                        <FaCalendarAlt />
                                    </div>
                                    <div>
                                        <span className="tracker__result-label">
                                            Fecha
                                        </span>
                                        <div className="tracker__result-value tracker__result-value--placeholder"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="tracker__result-footer">
                                <div className="tracker__result-status-wrapper bg-gray-100 dark:bg-gray-800">
                                    <span className="tracker__result-status-label">
                                        Estado:
                                    </span>
                                    <span className="tracker__result-status-badge tracker__result-status-badge--disabled">
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
