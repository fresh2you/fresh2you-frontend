const Button = ({ className, text, onClick }) => {
  return (
    <button
      className={`py-2 px-4 rounded-lg transition font-semibold ${className} hover:border-transparent focus:outline-none`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
