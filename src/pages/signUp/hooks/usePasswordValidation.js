import { useState, useEffect } from "react";
import { validationLogic } from "../utils/validationLogic";
import { handleConfirmPasswordChange } from "../utils/passwordUtils";

export const usePasswordValidation = (formData, setFormData, setStatus) => {
  const [passwordFeedbacks, setPasswordFeedbacks] = useState([]);

  useEffect(() => {
    const passwordFeedbackMessages = validationLogic.getPasswordFeedbackMessages(formData.password);
    setPasswordFeedbacks(passwordFeedbackMessages);
    if (formData.confirmPassword) {
      handleConfirmPasswordChange(formData.confirmPassword, formData.password, setFormData, setStatus);
    }
  }, [formData.password, formData.confirmPassword]);

  return { passwordFeedbacks };
};
