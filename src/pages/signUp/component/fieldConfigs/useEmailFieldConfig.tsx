import { ActionButton } from "../buttons/ActionButton";
import { handleEmailCheck } from "../../utils/handlers/handleEmailCheck";
import { useEmailDupCheck } from "../../hooks/useEmailDupCheck";
import { useRequestVerificationCode } from "../../hooks/useRequestVerificationCode";

export const useEmailFieldConfig = (
  formData: FormDataType,
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>,
  validity: ValidityType,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
): Field => {
  const { emailCheck } = useEmailDupCheck(formData.email, setStatus);
  const { requestVerify } = useRequestVerificationCode(formData.email, setStatus, validity.isEmailValid, setIsLoading);
  return {
    label: "이메일 주소",
    type: "email",
    value: formData.email,
    setValue: (value: string) => setFormData((prevFormData) => ({ ...prevFormData, email: value })),
    placeholder: "이메일을 입력하세요",
    autoComplete: "email",
    button: (
      <ActionButton
        isValid={validity.isEmailValid}
        onClick={() => handleEmailCheck(formData.email, setStatus, emailCheck, requestVerify)}
        text={{ valid: "완료", invalid: "인증" }}
        isSmallBtn={true}
      />
    ),
  };
};
