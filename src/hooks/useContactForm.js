import { useState } from "react";
import { contactService } from "../api/contactService";

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
                err.message ||
                    "Hubo un error al enviar tu mensaje. Intenta nuevamente."
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
