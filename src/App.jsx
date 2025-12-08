import { useEffect } from "react";

import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Section from "./components/Section";

import { projectBasics, projectWorks, projectApps } from "./data/projects";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Slinkter - Luis J Cueva";
  }, []);

  return (
    <div className="app">
      {/* Hero Section */}
      <Hero />

      {/* Trabajos Realizados */}
      <Section title="Trabajos Realizados" bgClass="section--gray">
        {projectWorks.map((item, index) => (
          <ProjectCard
            key={`work-${index}`}
            projectName={item.name}
            projectImage={item.image}
            projectLink={item.link}
          />
        ))}
      </Section>

      {/* Proyectos Android */}
      <Section title="Proyectos Android" bgClass="section--dark">
        {projectApps.map((item, index) => (
          <ProjectCard
            key={`app-${index}`}
            projectName={item.name}
            projectImage={item.image}
            projectLink={item.link}
          />
        ))}
      </Section>

      {/* Proyectos Web */}
      <Section title="Proyectos Web" bgClass="section--gray">
        {projectBasics.map((item, index) => (
          <ProjectCard
            key={`web-${index}`}
            projectName={item.name}
            projectImage={item.image}
            projectLink={item.link}
          />
        ))}
      </Section>
    </div>
  );
}

export default App;
