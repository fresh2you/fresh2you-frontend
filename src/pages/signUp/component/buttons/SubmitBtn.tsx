import { isFormValid } from "../../utils/validationUtils";
import "../../../../styles/styles.css";

interface SubmitBtnProps {
  validity: ValidityType;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ validity }) => {
  const formIsValid = isFormValid(validity);

  return (
    <button
      type="submit"
      className={`px-4 mt-4 common-btn 
        ${formIsValid ? "cursor-pointer bg-custom-green text-white" : "cursor-not-allowed bg-custom-gray-light"}`}
    >
      제출
    </button>
  );
};

export default SubmitBtn;
