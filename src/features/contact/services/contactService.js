export const contactService = {
    /*
     * Envía los datos del formulario al backend (Firebase Functions)
     * @param {Object} formData - { nombreCompleto, email, mensaje }
     * @returns {Promise<Object>} - Respuesta del servidor
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
     * Consulta el estado de un mensaje por su ID
     * @param {string} id - Ticket ID (ej: 0qqGMmN81eHJyMhTyzU3)
     * @returns {Promise<Object>} - Datos del mensaje
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
