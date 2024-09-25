import { useEffect } from "react";
import { validationLogic } from "../utils/validationLogic";

export const useFormValidation = (formData, status, setValidity, funnel) => {
  useEffect(() => {
    validationLogic.updateValidity(formData, status, setValidity, funnel);
  }, [status, formData]);
};
