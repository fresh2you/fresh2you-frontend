import { ActionButton } from "../../component/buttons/ActionButton";
import { handleNicknameCheck } from "../handlers/handleNicknameCheck";

export const createNicknameFieldConfig = (
  formData: FormDataType,
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  validity: ValidityType,
): Field => {
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
            handleNicknameCheck(formData, setStatus);
          }
        }}
        text={{ valid: "완료", invalid: "확인" }}
        isSmallBtn={true}
      />
    ),
  };
};
