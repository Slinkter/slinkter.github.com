const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");

// Importar lógica de envío
const { sendEmailLogic } = require("./emailSender");

// Inicializar Firebase Admin una sola vez
admin.initializeApp();

exports.sendContactEmail = onRequest(
    {
        timeoutSeconds: 60,
        memory: "256MiB",
        secrets: ["RESEND_API_KEY"],
        invoker: "public",
    },
    (request, response) => {
        return cors(request, response, async () => {
            // Validar método
            if (request.method !== "POST") {
                return response.status(405).json({
                    success: false,
                    message: "Method Not Allowed",
                });
            }

            try {
                const contactData = request.body;

                // Ejecutar lógica
                const result = await sendEmailLogic(contactData, admin);

                logger.info("Email enviado exitosamente", result);

                return response.status(200).json({
                    success: true,
                    message: "Mensaje enviado correctamente",
                    data: result,
                });
            } catch (error) {
                logger.error("Error en sendContactEmail:", error);

                // Manejo de errores seguro
                return response.status(500).json({
                    success: false,
                    message: error.message || "Error interno del servidor",
                });
            }
        });
    }
);

exports.checkMessageStatus = onRequest(
    {
        timeoutSeconds: 30,
        memory: "256MiB", // Aumentado de 128MiB para evitar límite excedido
        invoker: "public",
    },
    (request, response) => {
        return cors(request, response, async () => {
            // Solo permitir GET
            if (request.method !== "GET") {
                return response.status(405).json({
                    success: false,
                    message: "Method Not Allowed. Use GET.",
                });
            }

            const { id } = request.query;

            if (!id) {
                return response.status(400).json({
                    success: false,
                    message: "Falta el ID del mensaje.",
                });
            }

            try {
                const docRef = admin
                    .firestore()
                    .collection("mensajes_contacto")
                    .doc(id);
                const docSnap = await docRef.get();

                if (!docSnap.exists) {
                    return response.status(404).json({
                        success: false,
                        message: "Mensaje no encontrado.",
                    });
                }

                const data = docSnap.data();

                // Devolvemos solo datos seguros (no email, no telefono)
                return response.status(200).json({
                    success: true,
                    data: {
                        id: docSnap.id,
                        estado: data.estado || "Recibido",
                        fecha: data.timestamp
                            ? data.timestamp.toDate().toLocaleDateString()
                            : "Desconocida",
                        nombre: data.nombreCompleto, // Para que el usuario sepa que es suyo
                    },
                });
            } catch (error) {
                logger.error("Error consultando estado:", error);
                return response.status(500).json({
                    success: false,
                    message: "Error interno al consultar estado.",
                });
            }
        });
    }
);
