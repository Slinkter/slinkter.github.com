import { useCallback } from "react";
import { HEADER_OFFSET } from "@/components/layout/navigation";

/**
 * Custom hook for smooth scrolling to anchor links.
 * Employs native browser smooth scrolling and updates the URL dynamically
 * without triggering a page reload, improving UX.
 *
 * @returns {{ scrollToAnchor: (e: React.MouseEvent, href: string) => void }}
 */
const useSmoothScroll = () => {
  const scrollToAnchor = useCallback((e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // 1. Calcular posición exacta descontando el Navbar estático
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET;

      // 2. Ejecutar Scroll Nativo fluido
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // 3. Actualizar la URL de forma silenciosa para mejor UX/SEO visual
      if (window.history.pushState) {
        window.history.pushState(null, null, href);
      }
    }
  }, []);

  return { scrollToAnchor };
};

export default useSmoothScroll;
