import "../../../../styles/styles.css";
import { handleNext } from "../../utils/handlers/handleNext";
import { UseFunnelResults } from "@use-funnel/react-router-dom";

interface NextButtonProps {
  currentStep: keyof SignUpSteps;
  funnel: UseFunnelResults<SignUpStepContext, RouteOption>;
  formData: FormDataType;
}

export const NextButton: React.FC<NextButtonProps> = ({ currentStep, funnel, formData }) => {
  const handleNextStep = () => {
    switch (currentStep) {
      case "이메일입력":
        handleNext(funnel, formData);
        break;
      case "비밀번호입력":
        funnel.history.push("비밀번호확인", {
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        });
        break;
      case "비밀번호확인":
        funnel.history.push("닉네임입력", {
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          nickname: formData.nickname,
        });
        break;
      default:
        break;
    }
  };

  return (
    <button type="button" onClick={handleNextStep} className="next-btn text-custom-span-text">
      다음
    </button>
  );
};
