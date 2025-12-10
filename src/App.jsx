import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { projectBasics, projectWorks, projectApps } from "@/data/projects";
import "@/App.css";

// Lazy Imports
const Skills = lazy(() => import("@/components/Skills"));
const Contact = lazy(() => import("@/components/Contact"));
const WorkCard = lazy(() => import("@/components/WorkCard"));
const ProjectCard = lazy(() => import("@/components/ProjectCard"));
const MessageTracker = lazy(() => import("@/components/MessageTracker"));

// Skeletons
import SkeletonSkills from "@/components/skeletons/SkeletonSkills";
import SkeletonContact from "@/components/skeletons/SkeletonContact";
import SkeletonWorkCard from "@/components/skeletons/SkeletonWorkCard";
import SkeletonProjectCard from "@/components/skeletons/SkeletonProjectCard";

function App() {
    useEffect(() => {
        document.title = "Slinkter - Portfolio Profesional";
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
                                    <SkeletonWorkCard key={i} vertical={true} />
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
                <Section title="Aplicaciones Android" bgClass="section--dark">
                    <Suspense
                        fallback={
                            <>
                                {[1, 2, 3].map((i) => (
                                    <SkeletonWorkCard key={i} vertical={true} />
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
                    © {new Date().getFullYear()} Luis Jhonata Cueva R.
                    Construido con React & Tailwind.
                </p>
            </footer>
        </div>
    );
}

export default App;
