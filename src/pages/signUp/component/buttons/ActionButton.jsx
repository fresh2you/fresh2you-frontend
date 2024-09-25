import "../../../../styles/styles.css";
export const ActionButton = ({ isValid, onClick, text, isSmallBtn }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`action-btn 
        ${isValid ? "bg-custom-gray-dark hover:bg-custom-gray-dark" : "bg-custom-green hover:bg-custom-green-hover"}
        ${isSmallBtn ? "px-4" : "px-2"} min-w-16
        `}
      disabled={isValid}
    >
      {isValid ? text.valid : text.invalid}
    </button>
  );
};
