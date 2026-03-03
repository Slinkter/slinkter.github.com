import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Section from "@/components/common/Section";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import {
  projectBasics,
  projectWorks,
  projectApps,
} from "@/features/projects/data/projects";
import "@/App.css";

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

function App() {
  useEffect(() => {
    document.title = "LJCR - Portfolio ";
  }, []);

  return (
    <div className="min-h-screen bg-surface-base text-content-main font-sans selection:bg-brand-primary selection:text-white transition-colors duration-300">
      <Navbar />
      <Hero />

      <Suspense fallback={<SkeletonSkills />}>
        <Skills />
      </Suspense>

      <div id="projects">
        {/* Trabajos Realizados */}
        <Section title="Experiencia & Trabajos" bgVariant="gray">
          <Suspense
            fallback={
              <>
                {["a", "b", "c"].map((id) => (
                  <SkeletonWorkCard key={`sk-work-app-${id}`} vertical={true} />
                ))}
              </>
            }
          >
            {projectWorks.map((item, index) => (
              <WorkCard
                key={`work-${index}`}
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
        <Section title="Aplicaciones Android" bgVariant="dark">
          <Suspense
            fallback={
              <>
                {["a", "b", "c"].map((id) => (
                  <SkeletonWorkCard key={`sk-work-app-${id}`} vertical={true} />
                ))}
              </>
            }
          >
            {projectApps.map((item, index) => (
              <WorkCard
                key={`app-${index}`}
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
          bgVariant="gray"
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
            {projectBasics
              .map((item, index) => (
                <ProjectCard
                  key={`web-${index}`}
                  projectName={item.name}
                  projectImage={item.image}
                  projectLink={item.link}
                  tags={["HTML", "CSS", "JS"]}
                />
              ))
              .reverse()}
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
            <div className="h-40 w-full max-w-2xl mx-auto bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl my-20"></div>
          }
        >
          <MessageTracker />
        </Suspense>
      </ErrorBoundary>

      <footer className="py-8 text-center text-gray-500 text-sm bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <p className="container mx-auto px-4">
          © {new Date().getFullYear()} Luis Jhonata Cueva R. Construido con
          React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;
