const SkeletonWorkCard = ({ vertical = false }) => {
    return (
        <article
            className={`work-card ${
                vertical ? "work-card--vertical" : "work-card--horizontal"
            } border-none shadow-none`}
        >
            {/* Image Skeleton */}
            <div
                className={`work-card__image-container ${
                    vertical
                        ? "work-card__image-container--vertical"
                        : "work-card__image-container--horizontal"
                } skeleton`}
            ></div>

            {/* Content Skeleton */}
            <div
                className={`work-card__content ${
                    vertical ? "" : "work-card__content--horizontal"
                }`}
            >
                <div className="flex justify-between items-start mb-4 w-full">
                    <div className="w-full">
                        <div className="h-4 w-24 skeleton mb-2"></div>
                        <div className="h-8 w-3/4 skeleton"></div>
                    </div>
                </div>

                <div className="space-y-2 mb-6">
                    <div className="h-4 w-full skeleton"></div>
                    <div className="h-4 w-full skeleton"></div>
                    <div className="h-4 w-2/3 skeleton"></div>
                </div>

                <div className="flex gap-2 mt-auto">
                    <div className="h-6 w-16 rounded-full skeleton"></div>
                    <div className="h-6 w-16 rounded-full skeleton"></div>
                    <div className="h-6 w-16 rounded-full skeleton"></div>
                </div>
            </div>
        </article>
    );
};

export default SkeletonWorkCard;
