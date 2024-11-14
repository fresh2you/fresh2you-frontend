import { ActionButton } from "../buttons/ActionButton";
import { useNicknameCheck } from "../../hooks/useNicknameCheck";

export const useNicknameFieldConfig = (
  formData: FormDataType,
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  validity: ValidityType,
): Field => {
  const { nicknameCheck } = useNicknameCheck(setStatus);
  return {
    label: "닉네임",
    type: "text",
    value: formData.nickname,
    setValue: (value: string) => setFormData((prevFormData) => ({ ...prevFormData, nickname: value })),
    placeholder: "닉네임을 입력하세요",
    button: (
      <ActionButton
        isValid={validity.isNicknameValid}
        onClick={() => {
          if (formData.nickname.length > 20) {
            setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: "닉네임은 20자 미만이어야 합니다." }));
          } else {
            nicknameCheck(formData.nickname);
          }
        }}
        text={{ valid: "완료", invalid: "확인" }}
        isSmallBtn={true}
      />
    ),
  };
};
