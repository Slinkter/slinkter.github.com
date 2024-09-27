const ProjectCard = ({ projectName, projectImage, projectLink }) => {
    console.log(projectImage);

    return (
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            {/* Card Header */}
            <div className="card-header">
                <img
                    src={projectImage}
                    alt={projectName}
                    className="w-full h-48 object-cover"
                />
            </div>
            {/* Card Body */}
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {projectName}
                </h3>
            </div>
            {/* Card Footer */}
            <div className="p-4">
                <a
                    href={projectLink}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver Proyecto
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
