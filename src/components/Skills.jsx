const skills = [
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Firebase",
    "AWS",
    "Python",
    "Git",
];

const Skills = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
                >
                    <p className="text-center text-gray-800 dark:text-white">
                        {skill}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Skills;
