import authAPI from "@/services/api/authAPI";

export const handleNicknameCheck = async (
  formData: FormDataType,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
) => {
  if (formData.nickname) {
    try {
      await authAPI.validateNickname(formData.nickname);
      setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: "SUCCESS" }));
    } catch {
      setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: "닉네임이 이미 사용 중입니다." }));
    }
  } else {
    setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: "닉네임을 입력해주세요." }));
  }
};
