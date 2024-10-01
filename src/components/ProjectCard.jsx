const ProjectCard = ({ projectName, projectImage, projectLink, isDarkBG }) => {
    console.log(projectImage);

    return (
        <div
            className={
                isDarkBG
                    ? "bg-white dark:bg-gray-500 shadow-md rounded-lg overflow-hidden hover:shadow-xl "
                    : "bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-xl "
            }
        >
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
            <div className="p-4 flex justify-center items-center">
                <a
                    href={projectLink}
                    className="  p-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300 inline-flex items-center"
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
