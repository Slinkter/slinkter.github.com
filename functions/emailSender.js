const { HttpsError } = require("firebase-functions/v2/https");
const { Resend } = require("resend");
const { FieldValue } = require("firebase-admin/firestore");

// --- Plantillas HTML ---

const createAdminEmailHtml = (data) => `
  <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
    <h2 style="color: #2563eb;">Nuevo Mensaje de Contacto</h2>
    <p>Has recibido un mensaje a través de tu portafolio web.</p>
    <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
    <ul>
      <li><strong>Nombre:</strong> ${data.nombreCompleto}</li>
      <li><strong>Email:</strong> <a href="mailto:${data.email}">${
    data.email
}</a></li>
      <li><strong>Fecha:</strong> ${new Date().toLocaleString()}</li>
    </ul>
    <h3>Mensaje:</h3>
    <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb;">
      <p style="white-space: pre-wrap;">${data.mensaje}</p>
    </div>
  </div>
`;

// --- Lógica Principal ---

async function sendEmailLogic(contactData, admin) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const db = admin.firestore();

    // 1. Validaciones
    if (
        !contactData.email ||
        !contactData.nombreCompleto ||
        !contactData.mensaje
    ) {
        throw new HttpsError(
            "invalid-argument",
            "Faltan campos obligatorios: nombre, email o mensaje."
        );
    }

    // 2. Enviar correo al Administrador (A ti)
    // REEMPLAZAR 'from' con un dominio verificado o 'onboarding@resend.dev' para pruebas
    const adminEmail = await resend.emails.send({
        from: "Portafolio Contact <onboarding@resend.dev>",
        to: "luis.j.cueva@gmail.com", // TU CORREO PERSONAL
        reply_to: contactData.email,
        subject: `Nuevo mensaje de ${contactData.nombreCompleto}`,
        html: createAdminEmailHtml(contactData),
    });

    if (adminEmail.error) {
        console.error("Error enviando al admin:", adminEmail.error);
        throw new HttpsError(
            "internal",
            "Error al enviar notificación al admin."
        );
    }

    const emailId = adminEmail.data?.id || null;

    // 3. Guardar registro en Firestore (Base para el Tracking)
    try {
        const docRef = db.collection("mensajes_contacto").doc();
        await docRef.set({
            ...contactData,
            id: docRef.id,
            timestamp: FieldValue.serverTimestamp(),
            estado: "Recibido", // Estado inicial
            emailId: emailId,
        });
        // Devolvemos el ID para que el usuario pueda rastrearlo
        return { id: docRef.id, emailStatus: "sent_to_admin" };
    } catch (firestoreError) {
        console.error("Error guardando en Firestore:", firestoreError);
        return { id: null, emailStatus: "sent_but_not_saved" };
    }
}

module.exports = { sendEmailLogic };
