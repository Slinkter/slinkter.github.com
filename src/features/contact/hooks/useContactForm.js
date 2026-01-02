import { useState } from "react";
import { contactService } from "@/features/contact/services/contactService";

/**
 * Custom Hook para gestionar la lógica del formulario de contacto.
 * Maneja el estado de carga, errores, éxito y la comunicación con el servicio de contacto.
 *
 * @returns {Object} API del hook
 * @property {boolean} loading - Indica si el envío está en proceso.
 * @property {string|null} error - Mensaje de error si el envío falla.
 * @property {boolean} success - Indica si el envío fue exitoso.
 * @property {string|null} ticketId - ID del ticket generado por el backend.
 * @property {Function} submitContactForm - (payload: Object) => Promise<boolean>
 * @property {Function} resetForm - Resetea el estado del formulario.
 */
export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [ticketId, setTicketId] = useState(null);

  const submitContactForm = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    setTicketId(null);

    try {
      // exec function
      const response = await contactService.sendMessage(data);
      // Asumimos que response.data.id trae el ID del documento
      if (response && response.data && response.data.id) {
        setTicketId(response.data.id);
      }
      setSuccess(true);
      return true;
    } catch (err) {
      setError(
        err.message || "Hubo un error al enviar tu mensaje. Intenta nuevamente."
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setError(null);
    setSuccess(false);
    setTicketId(null);
  };

  return {
    loading,
    error,
    success,
    ticketId,
    submitContactForm,
    resetForm,
  };
};
