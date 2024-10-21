import { useEffect } from "react";
import { handleNext } from "../utils/handlers/handleNext";

const useAutoNext = (
  isEmailValid: boolean,
  currentStep: string,
  funnel: UseFunnelResults<SignUpStepContext>,
  formData: FormDataType,
) => {
  useEffect(() => {
    if (isEmailValid && currentStep === "이메일입력") {
      handleNext(funnel, formData);
    }
  }, [isEmailValid, currentStep]);
};

export default useAutoNext;
