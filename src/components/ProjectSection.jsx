import ProjectCard from "./ProjectCard";

const ProjectSection = ({ title, projects, isDarkBG }) => {
    return (
        <section
            className={`py-12 ${isDarkBG ? "bg-gray-100 dark:bg-gray-900" : "bg-gray-200 dark:bg-gray-700"}`}>
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-10 dark:text-white">
                    {title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10">
                    {projects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            projectName={item.name}
                            projectImage={item.image}
                            projectLink={item.link}
                            isDarkBG={isDarkBG}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
