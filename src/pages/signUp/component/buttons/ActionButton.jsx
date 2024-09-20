import "../../../../styles/styles.css";
export const ActionButton = ({ isValid, onClick, text, isSmallBtn, disabled = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`action-btn
        ${isValid ? "bg-custom-gray-dark" : "bg-custom-green"}
        ${isSmallBtn ? "px-4" : "px-2"}`}
      disabled={disabled}
    >
      {isValid ? text.valid : text.invalid}
    </button>
  );
};
