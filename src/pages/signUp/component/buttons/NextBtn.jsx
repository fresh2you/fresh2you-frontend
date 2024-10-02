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
      className=" bg-custom-gray-light whitespace-nowrap px-4 tablet:py-1 tablet:h-10 self-end 
 text-custom-black hover:bg-custom-gray-dark text-custom-span-text
  hover:text-white transition-all mobile:fixed mobile:w-11/12 mobile:bottom-4 mobile:left-1/2 mobile:-translate-x-1/2 
  mobile:max-w-[400px] tablet:static tablet:-translate-x-0 tablet:w-auto font-semibold mobile:py-3
  "
    >
      다음
    </button>
  );
};
