import { useState } from "react";
import Section from "./Section";
import ContactLinks from "./ContactLinks";
import { useContactForm } from "../hooks/useContactForm";
import {
    FaPaperPlane,
    FaCheckCircle,
    FaExclamationCircle,
} from "react-icons/fa";

const Contact = () => {
    const { loading, error, success, ticketId, submitContactForm, resetForm } =
        useContactForm();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        // Backend expects: nombreCompleto, email, mensaje
        const payload = {
            nombreCompleto: formData.name,
            email: formData.email,
            mensaje: formData.message,
        };

        const isSent = await submitContactForm(payload);

        if (isSent) {
            setFormData({ name: "", email: "", message: "" });
            // No reseteamos automáticamente para que el usuario vea su código
        }
    };

    return (
        <Section title="Contacto & Redes" bgClass="section--dark">
            <div className="contact__grid">
                {/* Contact Info */}
                <div className="contact__info">
                    <p className="contact__subtitle">
                        ¿Tienes una idea innovadora o necesitas un desarrollador
                        apasionado? <br />
                        ¡Hablemos! Estoy disponible para proyectos y nuevas
                        oportunidades.
                    </p>

                    <div className="contact__links-container">
                        <ContactLinks />
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact__form-container">
                    <h3 className="contact__form-title">Envíame un mensaje</h3>

                    {success ? (
                        <div className="contact-success">
                            <FaCheckCircle className="contact-success__icon" />
                            <h4 className="contact-success__title">
                                ¡Mensaje Enviado!
                            </h4>
                            <p className="contact-success__message">
                                Gracias por escribir. Hemos recibido tu mensaje
                                correctamente.
                            </p>

                            {ticketId && (
                                <div className="ticket-display">
                                    <span className="ticket-display__label">
                                        Código de Seguimiento
                                    </span>
                                    <div className="ticket-display__code-wrapper">
                                        <code className="ticket-display__code">
                                            {ticketId}
                                        </code>
                                    </div>
                                    <p className="ticket-display__hint">
                                        Guarda este código para consultar el
                                        estado de tu mensaje.
                                    </p>
                                </div>
                            )}

                            <button
                                onClick={resetForm}
                                className="contact-success__reset-btn"
                            >
                                Enviar otro mensaje
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact__form">
                            {/*  */}
                            {error && (
                                <div className="contact-error">
                                    <FaExclamationCircle />
                                    <span>{error}</span>
                                </div>
                            )}
                            {/*  */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="contact__label"
                                >
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="contact__input"
                                    placeholder="Ej. Juan Pérez"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="contact__label"
                                >
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="contact__input"
                                    placeholder="juan@ejemplo.com"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="contact__label"
                                >
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="contact__textarea"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                    required
                                    disabled={loading}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`contact__button group ${
                                    loading
                                        ? "opacity-70 cursor-not-allowed"
                                        : ""
                                }`}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span>Enviando...</span>
                                ) : (
                                    <>
                                        <span>Enviar Mensaje</span>
                                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default Contact;
