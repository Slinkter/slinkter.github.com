import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import useTheme from "@/hooks/useTheme";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "#hero" },
        { name: "Habilidades", href: "#skills" },
        { name: "Portafolio", href: "#projects" },
        { name: "Proyectos", href: "#experimental" },
        { name: "Contacto", href: "#contact" },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - headerOffset;

            // Custom Smooth Scroll Function (1000ms duration)
            const startPosition = window.pageYOffset;
            const distance = offsetPosition - startPosition;
            const duration = 1000; // Duración en milisegundos (ajustar p/ más lento)
            let start = null;

            const easeInOutQuad = (t, b, c, d) => {
                t /= d / 2;
                if (t < 1) return (c / 2) * t * t + b;
                t--;
                return (-c / 2) * (t * (t - 2) - 1) + b;
            };

            const animation = (currentTime) => {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = easeInOutQuad(
                    timeElapsed,
                    startPosition,
                    distance,
                    duration
                );
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };

            requestAnimationFrame(animation);
        }

        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`navbar ${
                isScrolled ? "glass shadow-sm" : "bg-transparent"
            }`}
        >
            <div className="container-custom flex justify-between items-center w-full">
                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => handleNavClick(e, "#hero")}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                >
                    Slinkter
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-yellow-400"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? (
                            <FaSun size={20} />
                        ) : (
                            <FaMoon size={20} />
                        )}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleTheme}
                        className="p-2 mr-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-yellow-400"
                    >
                        {theme === "dark" ? (
                            <FaSun size={20} />
                        ) : (
                            <FaMoon size={20} />
                        )}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-600 dark:text-gray-300 focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <FaTimes size={24} />
                        ) : (
                            <FaBars size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full glass shadow-md md:hidden flex flex-col items-center py-6 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link text-lg"
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
