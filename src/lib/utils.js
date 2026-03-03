import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges Tailwind CSS classes safely without style conflicts.
 * Evaluates truthy arrays/objects using `clsx` and merges them with `twMerge`.
 *
 * @param {...(string|Object|Array)} inputs - Class values to conditionally combine.
 * @returns {string} The safely merged and conflict-free Tailwind string.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
