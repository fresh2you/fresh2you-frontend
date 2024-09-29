import { ActionButton } from "../../component/buttons/ActionButton";
import { handleEmailCheck } from "../handlers/handleEmailCheck";
export const createEmailFieldConfig = (formData, setFormData, validity, setStatus, handleOpenModal, setIsLoading) => {
  return {
    label: "이메일 주소",
    type: "email",
    value: formData.email,
    setValue: (value) => setFormData((prevFormData) => ({ ...prevFormData, email: value })),
    placeholder: "이메일을 입력하세요",
    autoComplete: "email",
    button: (
      <ActionButton
        isValid={validity.isEmailValid}
        onClick={() => handleEmailCheck(formData.email, setStatus, handleOpenModal, setIsLoading)}
        text={{ valid: "완료", invalid: "인증" }}
        isSmallBtn={true}
      />
    ),
  };
};
