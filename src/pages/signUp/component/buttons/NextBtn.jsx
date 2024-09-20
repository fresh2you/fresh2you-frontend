import { isNextButtonDisabled } from "../../utils/validationUtils";
import "../../../../styles/styles.css";
export const NextButton = ({ currentStep, validity, funnel, formData }) => {
  const isDisabled = isNextButtonDisabled(currentStep, validity);

  return (
    <button
      type="button"
      onClick={() =>
        funnel.history.push(
          currentStep === "이메일입력"
            ? "비밀번호입력"
            : currentStep === "비밀번호입력"
            ? "비밀번호확인"
            : currentStep === "비밀번호확인"
            ? "닉네임입력"
            : "",
        )
      }
      disabled={isDisabled}
      className={`next-btn custom-focus-light ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      다음
    </button>
  );
};
