const ProductDetailSkeleton = () => {
  return (
    <div className="flex flex-col items-center min-h-screen text-custom-black px-4 md:px-8 lg:px-20">
      <div className="w-full max-w-4xl py-8 flex flex-col">
        <div className="flex justify-start mb-4">
          <div className="w-24 h-6 bg-gray-200 animate-pulse rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center md:gap-0 gap-8">
          <div className="flex justify-center items-center w-full md:w-80">
            <div className="w-full h-80 bg-gray-200 animate-pulse border rounded"></div>
          </div>
          <div className="flex flex-col justify-between w-full md:w-72">
            <div className="h-8 bg-gray-200 animate-pulse mb-4 rounded"></div>
            <div className="h-6 bg-gray-200 animate-pulse mb-2 rounded"></div>
            <div className="h-6 bg-gray-200 animate-pulse mb-4 rounded"></div>
            <div className="h-4 bg-gray-200 animate-pulse mb-4 rounded"></div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="w-full h-12 bg-gray-200 animate-pulse rounded"></div>
              <div className="w-full h-12 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
        </div>

        <div className="w-full mt-8 bg-gray-200 animate-pulse py-4 px-4 md:px-6 rounded-xl shadow-sm">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-gray-400 animate-pulse rounded-full"></div>
            <div className="ml-2 h-6 bg-gray-200 animate-pulse w-32 rounded"></div>
          </div>
          <div className="h-48 bg-gray-200 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
