const ProductCardSkeleton = () => {
  return (
    <div
      className="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs border border-custom-gray-light 
      cursor-pointer pt-2 w-40 h-auto animate-pulse"
    >
      <div className="flex justify-center items-center w-full">
        <div className="object-contain w-28 h-28 border rounded bg-custom-gray-light"></div>
      </div>
      <div className="py-2 px-4 flex flex-col space-y-2">
        <div className="h-4 bg-custom-gray-light rounded w-3/4"></div>
        <div className="h-3 bg-custom-gray-light rounded w-1/2"></div>
        <div className="h-4 bg-custom-gray-light rounded w-1/4"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
