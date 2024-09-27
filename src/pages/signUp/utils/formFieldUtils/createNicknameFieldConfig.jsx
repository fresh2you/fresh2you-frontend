import { checkNicknameDuplicate } from "../../api/verifications";
import { ActionButton } from "../../component/buttons/ActionButton";
export const createNicknameFieldConfig = (formData, setFormData, setStatus, validity) => {
  const handleNicknameCheck = async () => {
    if (formData.nickname) {
      try {
        await checkNicknameDuplicate(formData.nickname);
        setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: "SUCCESS" }));
      } catch {
        setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: "닉네임이 이미 사용 중입니다." }));
      }
    } else {
      setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: "닉네임을 입력해주세요." }));
    }
  };
  return {
    label: "닉네임",
    type: "text",
    value: formData.nickname,
    setValue: (value) => setFormData((prevFormData) => ({ ...prevFormData, nickname: value })),
    placeholder: "닉네임을 입력하세요",
    button: (
      <ActionButton
        isValid={validity.isNicknameValid}
        onClick={() => {
          if (formData.nickname.length > 20) {
            setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: "닉네임은 20자 미만이어야 합니다." }));
          } else {
            handleNicknameCheck();
          }
        }}
        text={{ valid: "완료", invalid: "중복 확인" }}
        isSmallBtn={false}
      />
    ),
  };
};
