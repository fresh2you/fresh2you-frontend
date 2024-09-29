const ProductDetailSkeleton = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-4 h-1/3 w-full">
        <div className="flex justify-center items-center w-1/3 h-full mobile:min-w-32">
          <div className="animate-pulse bg-gray-300 w-full h-full aspect-square rounded-md" />
        </div>
        <div className="flex flex-col w-2/3">
          <div className="animate-pulse bg-gray-300 h-6 mb-1 rounded-md w-3/4 max-w-52" />
          <div className="animate-pulse bg-gray-300 h-4 mb-1 rounded-md w-1/2 max-w-28" />
          <div className="animate-pulse bg-gray-300 h-6 rounded-md w-1/2 max-w-28" />
          <div className="flex gap-2 mobile:mt-1 tablet-sm:mt-2">
            <div className="animate-pulse bg-gray-300 h-10 w-1/2 rounded-md max-w-20" />
            <div className="animate-pulse bg-gray-300 h-10 w-1/2 rounded-md max-w-20" />
          </div>
        </div>
      </div>
      <div className="animate-pulse bg-gray-300 h-96 py-4 px-6 rounded-xl mt-3.5 desktop-sm:h-[480px]">
        <div className="flex items-center mb-2">
          <div className="w-6 h-6 bg-gray-200 rounded-md animate-pulse" />
          <div className="ml-1 h-6 w-24 animate-pulse bg-gray-200 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
