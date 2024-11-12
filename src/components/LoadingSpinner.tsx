const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[50px]">
      <div className="w-10 h-10 border-4 border-gray-200 rounded-full border-t-blue-500 animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
