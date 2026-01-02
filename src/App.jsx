import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Section from "@/components/ui/Section";
import {
  projectBasics,
  projectWorks,
  projectApps,
} from "@/features/portfolio/data/projects";
import "@/App.css";

// Lazy Imports
const Skills = lazy(() =>
  import("@/features/portfolio/components/SkillsSection")
);
const Contact = lazy(() =>
  import("@/features/contact/components/ContactSection")
);
const WorkCard = lazy(() => import("@/features/portfolio/components/WorkCard"));
const ProjectCard = lazy(() =>
  import("@/features/portfolio/components/ProjectCard")
);
const MessageTracker = lazy(() =>
  import("@/features/contact/components/MessageTracker")
);

// Skeletons
import SkeletonSkills from "@/features/portfolio/components/skeletons/SkeletonSkills";
import SkeletonContact from "@/features/contact/components/skeletons/SkeletonContact";
import SkeletonWorkCard from "@/features/portfolio/components/skeletons/SkeletonWorkCard";
import SkeletonProjectCard from "@/features/portfolio/components/skeletons/SkeletonProjectCard";

function App() {
  useEffect(() => {
    document.title = "LJCR - Portfolio ";
  }, []);

  return (
    <div className="app-layout">
      <Navbar />
      <Hero />

      <Suspense fallback={<SkeletonSkills />}>
        <Skills />
      </Suspense>

      <div id="projects">
        {/* Trabajos Realizados */}
        <Section title="Experiencia & Trabajos" bgClass="section--gray">
          <Suspense
            fallback={
              <>
                {[1, 2, 3].map((i) => (
                  <SkeletonWorkCard key={i} />
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
              />
            ))}
          </Suspense>
        </Section>

        {/* Proyectos Android */}
        <Section title="Aplicaciones Android" bgClass="section--dark">
          <Suspense
            fallback={
              <>
                {[1, 2, 3].map((i) => (
                  <SkeletonWorkCard key={i} />
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
              />
            ))}
          </Suspense>
        </Section>

        {/* Proyectos Web */}
        <Section
          title="Proyectos Experimentales"
          bgClass="section--gray"
          id="experimental"
        >
          <Suspense
            fallback={
              <>
                {[1, 2, 3].map((i) => (
                  <SkeletonProjectCard key={i} />
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
        <Suspense fallback={<SkeletonContact />}>
          <Contact />
        </Suspense>
      </div>

      {/* Message Tracker Section */}
      <Suspense
        fallback={
          <div className="h-40 w-full max-w-2xl mx-auto bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl my-20"></div>
        }
      >
        <MessageTracker />
      </Suspense>

      <footer className="app-footer">
        <p className="app-footer__text">
          © {new Date().getFullYear()} Luis Jhonata Cueva R. Construido con
          React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;
