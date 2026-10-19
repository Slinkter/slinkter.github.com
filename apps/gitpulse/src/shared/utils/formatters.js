/**
 * @file formatters.js
 * @description Formateadores de fecha y datos usando Intl API nativa.
 */

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/**
 * Formatea una fecha ISO a un formato legible en español.
 * @param {string} isoDateString - Cadena de fecha ISO 8601.
 * @returns {string} Fecha formateada en español.
 */
export const formatJoinDate = (isoDateString) => {
  if (!isoDateString) return "";
  const date = new Date(isoDateString);
  if (isNaN(date.getTime())) {
    return "Fecha inválida";
  }
  return dateFormatter.format(date);
};
