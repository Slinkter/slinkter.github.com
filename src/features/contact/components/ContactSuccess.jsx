import { memo } from "react";
import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

/**
 * ContactSuccess Component
 *
 * Displays success message and tracking ticket after form submission.
 * Pure Tailwind — no BEM abstraction.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.ticketId]
 * @param {Function} props.onReset
 */
const ContactSuccess = memo(function ContactSuccess({ ticketId, onReset }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center px-4">
      <FaCheckCircle className="text-5xl text-green-500 mb-4" />

      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
        ¡Mensaje Enviado!
      </h4>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Solicitud recibida. Tu mensaje ha sido procesado por nuestro sistema de
        gestión técnica. He generado un código de seguimiento para nuestra
        comunicación.
      </p>

      {ticketId && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6 w-full">
          <span className="block text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-1">
            Código de Seguimiento
          </span>
          <div className="flex items-center justify-center gap-3">
            <code className="text-2xl font-bold text-gray-800 dark:text-white font-mono">
              {ticketId}
            </code>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Guarda este código para consultar el estado de tu mensaje.
          </p>
        </div>
      )}

      <button
        onClick={onReset}
        className="text-blue-600 hover:text-blue-700 font-medium text-sm underline hover:no-underline transition-colors"
      >
        Enviar otro mensaje
      </button>
    </div>
  );
});

ContactSuccess.propTypes = {
  ticketId: PropTypes.string,
  onReset: PropTypes.func.isRequired,
};

export default ContactSuccess;
