import { checkNicknameDuplicate } from "../../api/verifications";
import { ActionButton } from "../../component/buttons/ActionButton";
export const createNicknameFieldConfig = (formData, setFormData, setStatus, validity) => {
  const handleNicknameCheck = async () => {
    if (formData.nickname) {
      try {
        const result = await checkNicknameDuplicate(formData.nickname);
        if (!result) {
          setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: "닉네임이 이미 사용 중입니다." }));
        } else {
          setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: "SUCCESS" }));
        }
      } catch {
        setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: "닉네임 확인에 실패했습니다." }));
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
        onClick={handleNicknameCheck}
        text={{ valid: "완료", invalid: "중복 확인" }}
        isSmallBtn={false}
      />
    ),
  };
};
