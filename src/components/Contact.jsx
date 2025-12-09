import { useState } from "react";
import Section from "./Section";
import ContactLinks from "./ContactLinks";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we will implement Google Cloud integration later
        console.log("Form submitted:", formData);
        alert(
            "Gracias por tu mensaje. La integración con el servidor de correo se implementará pronto."
        );
    };

    return (
        <Section title="Contacto & Redes" bgClass="section--dark">
            <div className="contact__grid">
                {/* Social Links & Info */}
                <div className="contact__info">
                    <h3 className="section__title text-left mb-6 !text-2xl">
                        Conectemos
                    </h3>
                    <p className="contact__subtitle">
                        Estoy siempre abierto a nuevas oportunidades,
                        colaboraciones o simplemente a charlar sobre tecnología.
                        ¡Sígueme en mis redes o envíame un mensaje directo!
                    </p>

                    <div className="contact__links-container">
                        <ContactLinks />
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact__form-container">
                    <h3 className="contact__form-title">Envíame un mensaje</h3>
                    <form onSubmit={handleSubmit} className="contact__form">
                        <div>
                            <label htmlFor="name" className="contact__label">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="contact__input"
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="contact__label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="contact__input"
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="contact__label">
                                Asunto
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="contact__input"
                                placeholder="¿Sobre qué quieres hablar?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="contact__label">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="contact__textarea"
                                placeholder="Escribe tu mensaje aquí..."
                            ></textarea>
                        </div>

                        <button type="submit" className="contact__button group">
                            <span>Enviar Mensaje</span>
                            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
