const SkeletonProjectCard = () => {
    return (
        <article className="card h-full border-none shadow-none">
            <div className="card__image-container skeleton"></div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="h-6 w-3/4 skeleton mb-2"></div>
                <div className="flex gap-2 mt-4">
                    <div className="h-5 w-12 rounded-md skeleton"></div>
                    <div className="h-5 w-12 rounded-md skeleton"></div>
                </div>
            </div>
        </article>
    );
};

export default SkeletonProjectCard;
