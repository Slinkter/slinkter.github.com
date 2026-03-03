/**
 * @typedef {Object} ContactMessage
 * @property {string} nombreCompleto - Full name of the sender
 * @property {string} email - Valid email address
 * @property {string} mensaje - The content of the message
 */

/**
 * @typedef {Object} ContactResponse
 * @property {boolean} success - Operation status
 * @property {string} message - Response message from server
 * @property {string} [id] - Created message/ticket ID
 */

/**
 * @typedef {Object} MessageStatus
 * @property {string} id - Ticket ID
 * @property {string} nombre - Sender name
 * @property {string} email - Sender email
 * @property {string} mensaje - Message content
 * @property {string} fecha - Creation date
 * @property {'Recibido' | 'En Revisión' | 'Respondido'} estado - Current status
 */

export const contactService = {
    /**
     * Sends contact form data to the backend serverless function.
     * 
     * @async
     * @param {ContactMessage} formData - The validated form data
     * @returns {Promise<ContactResponse>} The server response
     * @throws {Error} If network fails or server returns error status
     */
    sendMessage: async (formData) => {
        // En desarrollo, puedes usar la URL del emulador si corres 'npm run serve' en /functions
        // En producción, usa la URL que te dé 'firebase deploy'
        // Por ahora lo dejamos configurado para leer de variable de entorno VITE_API_URL
        const API_URL =
            import.meta.env.VITE_API_URL ||
            "https://sendcontactemail-hkbrg3axna-uc.a.run.app";

        try {
            const sendData = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            // Intentar parsear JSON incluso si falla la respuesta HTTP
            let result;
            try {
                result = await sendData.json();
            } catch (e) {
                // Si la respuesta no es JSON (ej. error 500 html de firebase)
                console.log(e);
                throw new Error(`Error HTTP: ${sendData.status}`);
            }

            if (!sendData.ok || !result.success) {
                throw new Error(result.message || "Error al enviar el mensaje");
            }

            return result;
        } catch (error) {
            console.error("Error en contactService:", error);
            throw error;
        }
    },
    /**
     * Retrieves the current processing status of a message by its unique ID.
     * 
     * @async
     * @param {string} id - Ticket ID (e.g. 0qqGMmN81eHJyMhTyzU3)
     * @returns {Promise<MessageStatus>} The status and metadata of the message
     * @throws {Error} If not found or server fails
     */
    checkStatus: async (id) => {
        // TODO: Reemplazar con la URL real después del despliegue: firebase deploy --only functions
        const API_URL = "https://checkmessagestatus-hkbrg3axna-uc.a.run.app";

        try {
            const response = await fetch(`${API_URL}?id=${id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || "No se encontró el mensaje");
            }

            return result.data;
        } catch (error) {
            console.error("Error en checkStatus:", error);
            throw error;
        }
    },
};
