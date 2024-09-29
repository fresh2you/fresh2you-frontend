const TermsListSkeleton = ({ count }) => (
  <div className="">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="mb-3 animate-pulse">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-4 w-4 bg-gray-300 rounded mr-2"></div>
            <div
              className="mobile:h-4 w-32 bg-gray-300 rounded
            tablet:h-5"
            ></div>
          </div>
          <div
            className="ml-2 mobile:h-[34px] mobile:w-[42px] bg-gray-300 
          rounded-md tablet:w-[47px] tablet:h-[38px]"
          ></div>
        </div>
      </div>
    ))}
  </div>
);

export default TermsListSkeleton;
