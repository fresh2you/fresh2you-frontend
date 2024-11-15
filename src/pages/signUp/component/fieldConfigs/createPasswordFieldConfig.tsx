import { handleConfirmPasswordChange } from "../../utils/passwordUtils";

export const createPasswordFieldConfig = (
  formData: FormDataType,
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  isConfirmPasswordField = false,
): Field => ({
  label: isConfirmPasswordField ? "비밀번호 확인" : "비밀번호",
  type: "password",
  value: isConfirmPasswordField ? formData.confirmPassword : formData.password,
  setValue: (value) =>
    isConfirmPasswordField
      ? handleConfirmPasswordChange(value, formData.password, setFormData, setStatus)
      : setFormData((prev) => ({ ...prev, password: value })),
  placeholder: isConfirmPasswordField ? "비밀번호를 다시 입력하세요" : "비밀번호를 입력하세요",
  autoComplete: "new-password",
});
