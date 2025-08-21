export const ProductListSkeleton = () => {
    return (
        <div className="mt-10">
            <div className="bg-gray-200 rounded w-52 h-8 mb-3 mx-auto md:mx-0 animate-pulse"></div>
            <div className="bg-gray-200 rounded w-64 h-5 mx-auto md:mx-0 animate-pulse "></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-9">
                <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
                <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
                <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
                <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
            </div>
        </div>
    );
};
