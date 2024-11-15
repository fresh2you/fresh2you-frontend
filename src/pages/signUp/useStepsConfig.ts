import { useEmailFieldConfig } from "./component/fieldConfigs/useEmailFieldConfig";
import { createPasswordFieldConfig } from "./component/fieldConfigs/createPasswordFieldConfig";
import { useNicknameFieldConfig } from "./component/fieldConfigs/useNicknameFieldConfig";

export function useStepsConfig(
  formData: FormDataType,
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  validity: ValidityType,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const emailFieldConfig = useEmailFieldConfig(formData, setFormData, validity, setStatus, setIsLoading);
  const passwordFieldConfig = createPasswordFieldConfig(formData, setFormData, setStatus, false);
  const confirmPasswordFieldConfig = createPasswordFieldConfig(formData, setFormData, setStatus, true);
  const nicknameFieldConfig = useNicknameFieldConfig(formData, setFormData, setStatus, validity);

  return {
    이메일입력: [emailFieldConfig],
    비밀번호입력: [passwordFieldConfig, emailFieldConfig],
    비밀번호확인: [confirmPasswordFieldConfig, passwordFieldConfig, emailFieldConfig],
    닉네임입력: [nicknameFieldConfig, confirmPasswordFieldConfig, passwordFieldConfig, emailFieldConfig],
  };
}
