import { useState, useCallback, memo } from "react";
import Section from "@/components/common/Section";
import ContactLinks from "@/features/contact/components/ContactLinks";
import ContactForm from "@/features/contact/components/ContactForm";
import ContactSuccess from "@/features/contact/components/ContactSuccess";
import { useContactForm } from "@/features/contact/hooks/useContactForm";

/**
 * Contact Component
 *
 * Orchestrator for the contact feature.
 * Pure Tailwind — no BEM abstraction.
 *
 * @component
 * @returns {React.JSX.Element}
 */
const Contact = memo(function Contact() {
  const { loading, error, success, ticketId, submitContactForm, resetForm } =
    useContactForm();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!formData.name || !formData.email || !formData.message) return;
      const payload = {
        nombreCompleto: formData.name,
        email: formData.email,
        mensaje: formData.message,
      };
      const isSent = await submitContactForm(payload);
      if (isSent) setFormData({ name: "", email: "", message: "" });
    },
    [formData, submitContactForm],
  );

  return (
    <Section title="Contacto & Redes" bgVariant="dark">
      <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl mx-auto">
        {/* Info */}
        <div className="flex flex-col justify-center">
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            ¿Buscas elevar la calidad técnica de tu producto? Estoy disponible
            para colaborar en proyectos que requieran arquitectura React sólida
            y optimización basada en diagnósticos de alta precisión. ¡Hablemos!
          </p>
          <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
            <ContactLinks />
          </div>
        </div>

        {/* Form / Success */}
        <div className="bg-surface-elevated p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-separator transition-all duration-300">
          <h3 className="text-2xl font-extrabold mb-8 text-content-main tracking-tight">
            Envíame un mensaje
          </h3>
          {success ? (
            <ContactSuccess ticketId={ticketId} onReset={resetForm} />
          ) : (
            <ContactForm
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              error={error}
              isLoading={loading}
            />
          )}
        </div>
      </div>
    </Section>
  );
});

export default Contact;
