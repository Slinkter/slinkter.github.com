import { useEffect, lazy, Suspense } from "react";
import { useScroll } from "motion/react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Section from "@/components/common/Section";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import {
  projectBasics,
  projectWorks,
  projectApps,
} from "@/features/projects/data/projects";

// Lazy Imports
const Skills = lazy(() =>
  import("@/features/skills").then((mod) => ({ default: mod.Skills })),
);
const Contact = lazy(() =>
  import("@/features/contact").then((mod) => ({ default: mod.Contact })),
);
const WorkCard = lazy(() =>
  import("@/features/projects").then((mod) => ({ default: mod.WorkCard })),
);
const ProjectCard = lazy(() =>
  import("@/features/projects").then((mod) => ({ default: mod.ProjectCard })),
);
const MessageTracker = lazy(() =>
  import("@/features/contact").then((mod) => ({ default: mod.MessageTracker })),
);

// Skeletons
import SkeletonSkills from "@/components/ui/skeletons/SkeletonSkills";
import SkeletonContact from "@/components/ui/skeletons/SkeletonContact";
import SkeletonWorkCard from "@/components/ui/skeletons/SkeletonWorkCard";
import SkeletonProjectCard from "@/components/ui/skeletons/SkeletonProjectCard";

const EXPERIMENTAL_TAGS = ["HTML", "CSS", "JS"];

function App() {
  useEffect(() => {
    document.title = "LJCR - Portfolio ";
  }, []);

  // ── Parallax dot-grid ───────────────────────────────────────────────────────
  // Updates body's background-position directly — no re-renders, no z-index
  // conflicts. Body background-image is ALWAYS behind every element by CSS spec.
  // Dots move at 30% of scroll speed → smooth parallax depth.
  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.on("change", (y) => {
      document.body.style.backgroundPosition = `0px ${y * 0.3}px`;
    });
  }, [scrollY]);

  return (
    <div className="min-h-screen text-content-main font-sans selection:bg-brand-primary selection:text-white">
      <Navbar />
      <Hero />

      <Suspense fallback={<SkeletonSkills />}>
        <Skills />
      </Suspense>

      <div id="projects">
        {/* Trabajos Realizados */}
        <Section title="Experiencia & Trabajos" bgVariant="dark">
          <Suspense
            fallback={
              <>
                {["a", "b", "c"].map((id) => (
                  <SkeletonWorkCard key={`sk-work-app-${id}`} vertical={true} />
                ))}
              </>
            }
          >
            {projectWorks.map((item) => (
              <WorkCard
                key={`work-${item.id || item.name}`}
                name={item.name}
                role={item.role}
                description={item.description}
                image={item.image}
                link={item.link}
                tags={item.tags}
                vertical={true}
              />
            ))}
          </Suspense>
        </Section>

        {/* Proyectos Android */}
        <Section title="Aplicaciones Android" bgVariant="gray">
          <Suspense
            fallback={
              <>
                {["a", "b", "c"].map((id) => (
                  <SkeletonWorkCard key={`sk-work-app-${id}`} vertical={true} />
                ))}
              </>
            }
          >
            {projectApps.map((item) => (
              <WorkCard
                key={`app-${item.id || item.name}`}
                name={item.name}
                role={item.role}
                description={item.description}
                image={item.image}
                link={item.link}
                tags={item.tags}
                vertical={true}
              />
            ))}
          </Suspense>
        </Section>

        {/* Proyectos Web */}
        <Section
          title="Proyectos Experimentales"
          bgVariant="dark"
          id="experimental"
        >
          <Suspense
            fallback={
              <>
                {["a", "b", "c"].map((id) => (
                  <SkeletonProjectCard key={`sk-proj-${id}`} />
                ))}
              </>
            }
          >
            {[...projectBasics].reverse().map((item) => (
              <ProjectCard
                key={`web-${item.id || item.name}`}
                projectName={item.name}
                projectImage={item.image}
                projectLink={item.link}
                tags={EXPERIMENTAL_TAGS}
              />
            ))}
          </Suspense>
        </Section>
      </div>

      {/* New Contact Section */}
      <div id="contact">
        <ErrorBoundary>
          <Suspense fallback={<SkeletonContact />}>
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </div>

      {/* Message Tracker Section */}
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="h-40 w-full max-w-2xl mx-auto skeleton rounded-xl my-20" />
          }
        >
          <div className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-16 relative inline-block w-full text-content-main after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-primary after:mx-auto after:mt-4 after:rounded-full">
                Rastrea tu Mensaje
              </h2>
              <MessageTracker />
            </div>
          </div>
        </Suspense>
      </ErrorBoundary>

      <footer className="py-12 text-center bg-surface-footer border-t border-separator transition-colors duration-300">
        <div className="container mx-auto px-4">
          <p className="text-content-muted text-sm font-medium">
            © {new Date().getFullYear()} Luis Jhonata Cueva R. Construido con
            <span className="text-brand-primary mx-1">React</span> &
            <span className="text-brand-primary mx-1">Tailwind</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
