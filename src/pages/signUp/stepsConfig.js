import { createEmailFieldConfig } from './utils/formFieldUtils/createEmailFieldConfig';
import { createPassWordFieldConfig } from './utils/formFieldUtils/createPasswordFieldConfig';
import { createConfirmPwdFieldConfig } from './utils/formFieldUtils/createConfirmPwdFieldConfig';
import { createNicknameFieldConfig } from './utils/formFieldUtils/createNicknameFieldConfig';
import { createTelFieldConfig } from './utils/formFieldUtils/createTelFieldConfig';
export function getStepsConfig(formData, setFormData, setStatus, validity, handleOpenModal, sendAttempts) {
  const emailFieldConfig = createEmailFieldConfig(formData, setFormData, validity, setStatus);
  const passwordFieldConfig = createPassWordFieldConfig(formData, setFormData);
  const confirmPasswordFieldConfig = createConfirmPwdFieldConfig(formData, setFormData, setStatus);
  const telFieldConfig = createTelFieldConfig(
    formData,
    setFormData,
    handleOpenModal,
    validity,
    sendAttempts,
    setStatus,
  );
  const nicknameFieldConfig = createNicknameFieldConfig(formData, setFormData, setStatus, validity);

  return {
    이메일입력: [emailFieldConfig],
    비밀번호입력: [passwordFieldConfig, emailFieldConfig],
    비밀번호확인: [confirmPasswordFieldConfig, passwordFieldConfig, emailFieldConfig],
    전화번호입력: [telFieldConfig, confirmPasswordFieldConfig, passwordFieldConfig, emailFieldConfig],
    닉네임입력: [
      nicknameFieldConfig,
      telFieldConfig,
      confirmPasswordFieldConfig,
      passwordFieldConfig,
      emailFieldConfig,
    ],
  };
}
