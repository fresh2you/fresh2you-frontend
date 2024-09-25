const TermsListSkeleton = ({ count }) => (
  <div className="mobile:w-[260px] tablet-sm:w-[280px] h-[152px]">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="mb-4 animate-pulse">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-4 w-4 bg-gray-300 rounded mr-2"></div>
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
          </div>
          <div className="ml-2 h-8 w-16 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    ))}
  </div>
);

export default TermsListSkeleton;
