import { memo, useEffect } from "react";
import PropTypes from "prop-types";
import { FaTimes, FaCheckCircle, FaMobileAlt, FaLayerGroup } from "react-icons/fa";
import { m, AnimatePresence } from "motion/react";
import Tag from "@/components/ui/Tag";

/**
 * AppShowcaseModal Component
 *
 * Renders a self-contained technical specification modal for mobile/enterprise
 * applications, displaying available modules, highlights, and architecture
 * without exposing sensitive client company details.
 *
 * @component
 * @param {Object} props
 * @param {Object|null} props.app - Selected application object with details
 * @param {Function} props.onClose - Callback to close the modal
 */
const AppShowcaseModal = memo(({ app, onClose }) => {
  useEffect(() => {
    if (!app) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [app, onClose]);

  return (
    <AnimatePresence>
      {app && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="app-showcase-title"
          onClick={onClose}
        >
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.2 }}
            className="bg-surface-elevated border border-separator rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-content-main"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-52 sm:h-64 w-full overflow-hidden">
              <img
                src={app.image}
                alt={app.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-brand-primary transition-colors"
                aria-label="Cerrar ficha técnica"
              >
                <FaTimes size={18} />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary bg-black/60 px-3 py-1 rounded-full mb-2">
                  <FaMobileAlt /> {app.role}
                </span>
                <h3
                  id="app-showcase-title"
                  className="text-2xl sm:text-3xl font-bold text-white leading-tight"
                >
                  {app.name}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-content-muted leading-relaxed text-base">
                {app.details?.summary || app.description}
              </p>

              {/* Key Highlights */}
              {app.details?.highlights?.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-3 flex items-center gap-2">
                    <FaLayerGroup /> Módulos y Funcionalidades Implementadas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {app.details.highlights.map((mod) => (
                      <div
                        key={mod.title}
                        className="p-4 rounded-2xl bg-surface-base border border-separator"
                      >
                        <div className="flex items-start gap-2.5">
                          <FaCheckCircle className="text-brand-primary mt-1 shrink-0" />
                          <div>
                            <h5 className="font-semibold text-content-main text-sm mb-1">
                              {mod.title}
                            </h5>
                            <p className="text-xs text-content-muted leading-relaxed">
                              {mod.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stack Tags */}
              <div className="pt-2 border-t border-separator flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {app.tags?.map((tag) => (
                    <Tag
                      key={tag}
                      className="bg-surface-base border-separator text-content-muted"
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-brand-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Cerrar Ficha
                </button>
              </div>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
});

AppShowcaseModal.displayName = "AppShowcaseModal";

AppShowcaseModal.propTypes = {
  app: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.shape({
      summary: PropTypes.string,
      highlights: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          detail: PropTypes.string.isRequired,
        }),
      ),
    }),
  }),
  onClose: PropTypes.func.isRequired,
};

export default AppShowcaseModal;
