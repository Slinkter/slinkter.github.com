const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "Python",
    "SQL",
    "Git",
    "React",
    "Firebase",
    "AWS",
    "Android",
    "PMI",
];

const Skills = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg    "
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
