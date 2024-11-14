import "../../../../styles/styles.css";
import { handleNext } from "../../utils/handlers/handleNext";
import { UseFunnelResults } from "@use-funnel/react-router-dom";

interface NextButtonProps {
  currentStep: keyof SignUpSteps;
  funnel: UseFunnelResults<SignUpStepContext, RouteOption>;
  formData: FormDataType;
}

export const NextButton: React.FC<NextButtonProps> = ({ currentStep, funnel, formData }) => {
  return (
    <button
      type="button"
      onClick={() => handleNext(funnel, formData, currentStep)}
      className="next-btn text-custom-span-text"
    >
      다음
    </button>
  );
};
