const SkeletonSkills = () => {
    return (
        <section className="skills-section">
            <div className="skills__container">
                <div className="h-10 w-64 mx-auto skeleton mb-16 rounded-full"></div>
                <div className="skills__grid">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                        <div
                            key={item}
                            className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-100 dark:border-gray-800"
                        >
                            <div className="h-12 w-12 rounded-full skeleton mb-3"></div>
                            <div className="h-4 w-20 skeleton"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkeletonSkills;
