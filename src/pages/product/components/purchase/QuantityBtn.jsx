const QuantityButton = ({ onClick, imgSrc, altText }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="custom-focus-light flex items-center justify-center mobile:w-8 h-8 tablet:w-10 tablet:h-10
      bg-custom-gray-light hover:bg-gray-300 
      custom-focus-light p-0 rounded-none"
    >
      <img
        src={imgSrc}
        alt={altText}
        className="mobile:w-4 mobile:h-4 tablet-sm:w-5 tablet-sm:h-5  tablet:w-6 tablet:h-6"
      />
    </button>
  );
};

export default QuantityButton;
