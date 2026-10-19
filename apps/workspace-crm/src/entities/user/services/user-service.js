/**
 * @fileoverview
 * Application Service para el dominio de Usuarios.
 * Actúa como orquestador entre la capa de infraestructura (API Adapters)
 * y la capa de dominio (Mappers).
 * Sigue el principio de Single Responsibility
 * al centralizar la lógica de negocio para obtener datos de usuario complejos.
 *
 * @module user-service
 */

import { getUser, getAllUsers } from "@/entities/user/api/user.api";
import { getPostsByUser } from "@/entities/post/api/post.api";

/**
 * @typedef {Object} UserEntity
 * @property {number} id - El identificador único del usuario.
 * @property {string} name - El nombre completo del usuario.
 * @property {string} username - El alias único del usuario.
 * @property {string} email - Correo electrónico.
 * @property {string} website - Sitio web personal.
 * @property {string} company - Nombre de la empresa.
 * @property {string} phone - Teléfono de contacto.
 * @property {string} address - Dirección física.
 * @property {string} companyExt - Extensión de la empresa.
 * @property {string} companyCatchPhrase - Slogan de la empresa.
 * @property {string} companySlogan - Slogan general de la empresa.
 * @property {string} userId - ID interno del sistema.
 */

/**
 * @typedef {Object} PostEntity
 * @property {number} id - ID de la publicación.
 * @property {number} userId - ID del usuario autor.
 * @property {string} title - Título del post.
 * @property {string} body - Contenido del post.
 */

/**
 * Recupera el perfil completo de un usuario, incluyendo sus publicaciones.
 * Coordina múltiples llamadas concurrentes a la API.
 *
 * @async
 * @function fetchUserProfileById
 * @param {number|string} userId - El identificador único del usuario.
 * @param {RequestInit} [options={}] - Opciones para las peticiones fetch (ej: signal).
 * @returns {Promise<{user: UserEntity|null, posts: Array<PostEntity>}>} Un objeto que contiene el perfil
 * del usuario mapeado y su lista de publicaciones sanitizada.
 */
export const fetchUserProfileById = async (userId, options = {}) => {
    if (!userId) return { user: null, posts: [] };

    const userPromise = getUser(userId, options);
    const postsPromise = getPostsByUser(userId, options).catch((error) => {
        console.warn(
            "Non-critical Error: Failed to fetch posts, continuing with user profile.",
            error,
        );
        return [];
    });

    const [user, posts] = await Promise.all([userPromise, postsPromise]);

    if (!user || Object.keys(user).length === 0) {
        return { user: null, posts: [] };
    }

    return { user, posts: posts || [] };
};

/**
 * Obtiene y sanitiza la lista de todos los usuarios registrados.
 * Aplica validaciones de integridad después del mapeo para asegurar que
 * solo los perfiles válidos lleguen a la UI.
 *
 * @async
 * @function fetchAllUsers
 * @param {RequestInit} [options={}] - Opciones para la petición fetch.
 * @returns {Promise<Array<UserEntity>>} Una promesa que resuelve con la lista completa de
 * usuarios del dominio.
 */
export const fetchAllUsers = async (options = {}) => {
    const users = await getAllUsers(options);

    if (!Array.isArray(users)) return [];

    return users.filter((user) => user && user.id);
};
