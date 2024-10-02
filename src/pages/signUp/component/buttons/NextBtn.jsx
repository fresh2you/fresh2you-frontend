import "../../../../styles/styles.css";
export const NextButton = ({ currentStep, validity, funnel, formData }) => {
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
      className="next-btn text-custom-span-text"
    >
      다음
    </button>
  );
};
