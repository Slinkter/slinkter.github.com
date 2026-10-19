import { motion } from "motion/react";
import PropTypes from "prop-types";
import { Star, GitFork, ExternalLink, Code2, Calendar } from "lucide-react";
import { useUserReposQuery } from "@/entities/user";
import { cn, TAILWIND_STYLE_TOKENS, formatJoinDate } from "@/shared";

const UserRepositories = ({ username, variants }) => {
  const { data: repos = [], isLoading } = useUserReposQuery(username);

  return (
    <motion.section
      variants={variants}
      className="space-y-4"
      aria-label="Repositorios públicos del usuario"
    >
      <div className="flex items-center justify-between pb-2 border-b border-border">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-accent" />
          <h3 className="text-lg font-heading font-bold text-text">
            Repositorios Recientes y Destacados
          </h3>
        </div>
        <span className="font-mono text-xs text-text-mute">
          {isLoading ? "Cargando..." : `${repos.length} proyectos`}
        </span>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={cn(
                TAILWIND_STYLE_TOKENS.card,
                "p-5 flex flex-col justify-between gap-3 animate-pulse min-h-[140px]",
              )}
            >
              <div className="h-5 w-1/2 bg-border/60 rounded" />
              <div className="h-3 w-5/6 bg-border/40 rounded" />
              <div className="flex gap-4 pt-2">
                <div className="h-3 w-16 bg-border/30 rounded" />
                <div className="h-3 w-12 bg-border/30 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : repos.length === 0 ? (
        <div className={cn(TAILWIND_STYLE_TOKENS.card, "p-8 text-center text-text-mute text-sm")}>
          No se encontraron repositorios públicos para este usuario.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <motion.a
              key={repo.id}
              href={repo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={cn(
                TAILWIND_STYLE_TOKENS.card,
                "p-5 flex flex-col justify-between gap-3 group/repo hover:border-accent/40 transition-colors cursor-pointer",
              )}
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-text group-hover/repo:text-accent transition-colors font-mono truncate">
                    {repo.name}
                  </h4>
                  <ExternalLink className="w-3.5 h-3.5 text-text-mute group-hover/repo:text-accent transition-colors shrink-0" />
                </div>
                <p className="text-xs text-text-mute line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border text-[11px] font-mono text-text-mute">
                <span className="flex items-center gap-1.5 font-semibold text-text">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {repo.language}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1" title="Estrellas">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500/20" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1" title="Forks">
                    <GitFork className="w-3.5 h-3.5 text-indigo-400" />
                    {repo.forks}
                  </span>
                </div>
              </div>

              {repo.updatedAt && (
                <div className="flex items-center gap-1 text-[10px] text-text-mute/70 pt-1 font-mono">
                  <Calendar className="w-3 h-3" />
                  <span>Actualizado: {formatJoinDate(repo.updatedAt)}</span>
                </div>
              )}
            </motion.a>
          ))}
        </div>
      )}
    </motion.section>
  );
};

UserRepositories.propTypes = {
  username: PropTypes.string.isRequired,
  variants: PropTypes.object,
};

UserRepositories.displayName = "UserRepositories";

export default UserRepositories;
