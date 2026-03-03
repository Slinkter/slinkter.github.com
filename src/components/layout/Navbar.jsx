import { useState, useEffect, useCallback, memo } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { m, AnimatePresence } from "motion/react";
import useTheme from "@/hooks/useTheme";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/components/layout/navigation";

/**
 * Navbar Component
 *
 * Provides responsive navigation, theme toggling, and smooth scrolling.
 * Fully token-based — no hardcoded colors.
 * Glass effect uses surface-base/70 for consistent theme transitions.
 * Memoized to prevent unnecessary re-renders when parent components change.
 *
 * @component
 * @returns {React.JSX.Element} The rendered navigation bar layout.
 */
const Navbar = memo(function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { scrollToAnchor } = useSmoothScroll();
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Handles navigation link clicking with smooth scroll logic.
   *
   * @param {React.MouseEvent<HTMLAnchorElement>} e - Click event
   * @param {string} href - Target anchor href
   */
  const handleNavClick = useCallback(
    (e, href) => {
      scrollToAnchor(e, href);
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen, scrollToAnchor],
  );

  return (
    <m.nav
      initial={shouldReduceMotion ? false : { y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 h-16 flex items-center",
        isScrolled
          ? "bg-surface-base/75 backdrop-blur-xl border-b border-separator/60 shadow-sm shadow-separator/30"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex justify-between items-center w-full">
        {/* Logo */}
        <button
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm"
        >
          Slinkter
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              className="inline-flex items-center min-h-[44px] text-content-muted hover:text-brand-primary font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </button>
          ))}
          <m.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-surface-elevated transition-colors text-content-muted hover:text-brand-primary"
            aria-label={
              theme === "dark"
                ? "Cambiar a modo claro"
                : "Cambiar a modo oscuro"
            }
          >
            {theme === "dark" ? (
              <FaSun size={20} aria-hidden="true" />
            ) : (
              <FaMoon size={20} aria-hidden="true" />
            )}
          </m.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <m.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 mr-4 rounded-full hover:bg-surface-elevated transition-colors text-content-muted hover:text-brand-primary"
            aria-label={
              theme === "dark"
                ? "Cambiar a modo claro"
                : "Cambiar a modo oscuro"
            }
          >
            {theme === "dark" ? (
              <FaSun size={20} aria-hidden="true" />
            ) : (
              <FaMoon size={20} aria-hidden="true" />
            )}
          </m.button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-content-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm"
            aria-label={
              isMobileMenuOpen
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación"
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <FaTimes size={24} aria-hidden="true" />
            ) : (
              <FaBars size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 left-0 w-full bg-surface-base/90 backdrop-blur-xl border-b border-separator/60 shadow-md md:hidden flex flex-col items-center py-6 space-y-4 overflow-hidden"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                className="inline-flex items-center min-h-[44px] text-content-muted hover:text-brand-primary font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm text-lg"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </button>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </m.nav>
  );
});

export default Navbar;
