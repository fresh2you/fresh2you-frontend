const Button = ({ className, text, onClick }) => {
  return (
    <button
      className={`mobile:py-1 px-2 rounded-lg 
        tablet-sm:py-1.5
        transition font-semibold ${className} custom-focus-light text-custom-btn-text whitespace-nowrap`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
