import { createEmailFieldConfig } from "./utils/formFieldUtils/createEmailFieldConfig";
import { createPassWordFieldConfig } from "./utils/formFieldUtils/createPasswordFieldConfig";
import { createConfirmPwdFieldConfig } from "./utils/formFieldUtils/createConfirmPwdFieldConfig";
import { createNicknameFieldConfig } from "./utils/formFieldUtils/createNicknameFieldConfig";
export function getStepsConfig(formData, setFormData, setStatus, validity, handleOpenModal) {
  const emailFieldConfig = createEmailFieldConfig(formData, setFormData, validity, setStatus, handleOpenModal);
  const passwordFieldConfig = createPassWordFieldConfig(formData, setFormData);
  const confirmPasswordFieldConfig = createConfirmPwdFieldConfig(formData, setFormData, setStatus);
  const nicknameFieldConfig = createNicknameFieldConfig(formData, setFormData, setStatus, validity);

  return {
    이메일입력: [emailFieldConfig],
    비밀번호입력: [passwordFieldConfig, emailFieldConfig],
    비밀번호확인: [confirmPasswordFieldConfig, passwordFieldConfig, emailFieldConfig],
    닉네임입력: [nicknameFieldConfig, confirmPasswordFieldConfig, passwordFieldConfig, emailFieldConfig],
  };
}
