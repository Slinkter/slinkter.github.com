import { memo } from "react";
import PropTypes from "prop-types";
import { FaPaperPlane, FaExclamationCircle } from "react-icons/fa";
import { cn } from "@/lib/utils";

/**
 * ContactForm Component
 *
 * Controlled (dumb) form component — receives all state from parent.
 * Pure Tailwind — no BEM abstraction.
 *
 * @component
 * @param {Object} props
 * @param {{ name: string, email: string, message: string }} props.formData
 * @param {Function} props.onChange
 * @param {Function} props.onSubmit
 * @param {string} [props.error]
 * @param {boolean} props.isLoading
 */
const ContactForm = memo(function ContactForm({
  formData,
  onChange,
  onSubmit,
  error,
  isLoading,
}) {
  const inputBase =
    "w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all text-gray-800 dark:text-white";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm rounded-lg flex items-center gap-2">
          <FaExclamationCircle />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Nombre Completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
          className={inputBase}
          placeholder="Ej. Juan Pérez"
          required
          disabled={isLoading}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          className={inputBase}
          placeholder="juan@ejemplo.com"
          required
          disabled={isLoading}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={onChange}
          rows="4"
          className={cn(inputBase, "resize-none")}
          placeholder="Cuéntame sobre tu proyecto..."
          required
          disabled={isLoading}
        />
      </div>

      <button
        type="submit"
        className={cn(
          "w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mt-2",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          isLoading && "opacity-70 cursor-not-allowed",
        )}
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? (
          <span>Enviando...</span>
        ) : (
          <>
            <span>Enviar Mensaje</span>
            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
});

ContactForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default ContactForm;
