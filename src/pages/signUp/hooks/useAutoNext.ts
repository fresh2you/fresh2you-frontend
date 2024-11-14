import { useEffect } from "react";
import { handleNext } from "../utils/handlers/handleNext";
import { UseFunnelResults } from "@use-funnel/react-router-dom";

const useAutoNext = (
  validity: ValidityType,
  currentStep: string,
  funnel: UseFunnelResults<SignUpStepContext, RouteOption>,
  formData: FormDataType,
) => {
  useEffect(() => {
    const stepValidityMap: Record<string, boolean> = {
      이메일입력: validity.isEmailValid,
      비밀번호입력: validity.isPasswordValid,
      비밀번호확인: validity.isConfirmPasswordValid,
    };
    console.log(validity.isConfirmPasswordValid);
    if (stepValidityMap[currentStep]) {
      handleNext(funnel, formData, currentStep);
    }
  }, [validity, currentStep]);
};

export default useAutoNext;
