const Button = ({ className, text }) => {
  return (
    <button
      className={`py-2 px-4 rounded-lg transition font-semibold ${className}`}
      style={{ borderColor: 'transparent', outline: 'none' }}
    >
      {text}
    </button>
  );
};

export default Button;
