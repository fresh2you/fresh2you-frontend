import { ActionButton } from "../../component/buttons/ActionButton";
//import handleEmailCheck from "../handlers/handleEmailCheck";

export const createEmailFieldConfig = (formData, setFormData, validity, setStatus, handleOpenModal) => {
  const handleMockEmailCheck = async () => {
    if (!formData.email) {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 주소를 입력해주세요." }));
      return;
    } else {
      handleOpenModal();
    }
  };

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
        onClick={handleMockEmailCheck}
        text={{ valid: "완료", invalid: "인증" }}
        isSmallBtn={true}
      />
    ),
  };
};
