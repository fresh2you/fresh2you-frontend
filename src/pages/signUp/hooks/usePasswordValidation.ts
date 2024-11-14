import { useEffect } from "react";
import { validationLogic } from "../utils/validationLogic";
import { handleConfirmPasswordChange } from "../utils/passwordUtils";
import { validatePassword } from "../utils/passwordUtils";

export const usePasswordValidation = (
  formData: FormDataType,
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  setValidity: React.Dispatch<React.SetStateAction<ValidityType>>,
) => {
  useEffect(() => {
    const passwordFeedbackMessages = validationLogic.getPasswordFeedbackMessages(formData.password);
    setStatus((prevStatus) => ({
      ...prevStatus,
      passwordStatus: passwordFeedbackMessages,
    }));
    if (formData.password && validatePassword(formData.password).isValid) {
      setValidity((preValidity) => ({
        ...preValidity,
        isPasswordValid: true,
      }));
    }
    if (formData.confirmPassword) {
      handleConfirmPasswordChange(formData.confirmPassword, formData.password, setFormData, setStatus);
    }
  }, [formData.password, formData.confirmPassword]);
};
