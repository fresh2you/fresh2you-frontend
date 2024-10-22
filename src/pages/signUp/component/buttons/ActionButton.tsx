import "../../../../styles/styles.css";

export interface ActionButtonProps {
  isValid: boolean;
  onClick: () => void;
  text: {
    valid: string;
    invalid: string;
  };
  isSmallBtn?: boolean;
  isModal?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ isValid, onClick, text, isSmallBtn, isModal }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`action-btn py-0
        ${
          isModal
            ? isValid
              ? "bg-custom-gray-dark hover:bg-custom-gray-dark text-white"
              : "bg-custom-gray-light hover:bg-custom-gray-dark text-custom-black hover:text-white"
            : isValid
            ? "bg-custom-gray-dark hover:bg-custom-gray-dark text-white"
            : "bg-custom-green hover:bg-custom-green-hover text-white"
        }
        ${isSmallBtn ? "px-4" : "px-2"}
        `}
      disabled={isValid}
    >
      {isValid ? text.valid : text.invalid}
    </button>
  );
};
