import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import WorkCard from "./components/WorkCard";
import Section from "./components/Section";
import Contact from "./components/Contact"; // New Import
import { projectBasics, projectWorks, projectApps } from "./data/projects";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Slinkter - Portfolio Profesional";
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />

      <div id="projects">
        {/* Trabajos Realizados */}
        <Section title="Experiencia & Trabajos" bgClass="section--gray">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col gap-8 w-full max-w-5xl mx-auto">
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
          </div>
        </Section>

        {/* Proyectos Android */}
        <Section title="Aplicaciones Android" bgClass="section--dark">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col gap-8 w-full max-w-5xl mx-auto">
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
          </div>
        </Section>

        {/* Proyectos Web */}
        <Section title="Proyectos Experimentales" bgClass="section--gray">
          {projectBasics.map((item, index) => (
            <ProjectCard
              key={`web-${index}`}
              projectName={item.name}
              projectImage={item.image}
              projectLink={item.link}
              tags={["HTML", "CSS", "JS"]}
            />
          ))}
        </Section>
      </div>

      {/* New Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      <footer className="py-8 text-center text-gray-500 text-sm bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <p>
          © {new Date().getFullYear()} Luis Jhonata Cueva R. Construido con
          React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;
