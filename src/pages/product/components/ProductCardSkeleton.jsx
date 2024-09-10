const ProductCardSkeleton = () => (
  <div className="bg-custom-white shadow-lg rounded-xl overflow-hidden w-full max-w-xs border border-custom-gray-light animate-pulse">
    <div className="flex justify-center items-center w-full h-48 mt-4 bg-gray-200"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-200 mb-2 rounded"></div>
      <div className="h-4 bg-gray-200 mb-4 rounded w-3/4"></div>
      <div className="h-10 bg-gray-200 rounded"></div>
    </div>
  </div>
);

export default ProductCardSkeleton;
