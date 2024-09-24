import { isFormValid } from "../../utils/validationUtils";
import "../../../../styles/styles.css";
const SubmitBtn = ({ validity }) => {
  const formIsValid = isFormValid(validity);

  return (
    <button
      type="submit"
      className={`px-4 py-2 rounded mt-4 w-full text-white hover:border-transparent custom-focus-light ${
        formIsValid ? "cursor-pointer bg-custom-green" : "cursor-not-allowed bg-custom-gray-light"
      }`}
    >
      제출
    </button>
  );
};

export default SubmitBtn;
