import { useEffect } from "react";
import { validationLogic } from "../utils/validationLogic";

export const useFormValidation = (
  formData: FormDataType,
  status: StatusType,
  setValidity: React.Dispatch<React.SetStateAction<ValidityType>>,
) => {
  useEffect(() => {
    validationLogic.updateValidity(status, setValidity);
  }, [status, formData, setValidity]);
};
