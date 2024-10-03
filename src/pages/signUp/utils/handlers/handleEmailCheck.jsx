import { checkEmailDuplicate, sendEmailVerificationCode } from "../../api/verifications";
const checkEmailAndSetStatus = async (email, setStatus) => {
  if (!email) {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 주소를 입력해주세요." }));
    return false;
  }

  try {
    await checkEmailDuplicate(email);
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "" }));
    return true;
  } catch {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 주소가 이미 사용 중입니다." }));
    return false;
  }
};

const sendVerificationCodeAndHandleModal = async (email, setStatus, handleOpenModal) => {
  try {
    await sendEmailVerificationCode(email);
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "" }));
    handleOpenModal();
  } catch (error) {
    if (error.response.data.code === "1400") {
      setStatus((prevStatus) => ({
        ...prevStatus,
        emailStatus: "하루 인증 요청 횟수를 초과했습니다.",
      }));
    } else {
      setStatus((prevStatus) => ({
        ...prevStatus,
        emailStatus: "이메일 인증 코드 전송에 실패했습니다.",
      }));
    }
  }
};

export const handleEmailCheck = async (email, setStatus, handleOpenModal, setIsLoading) => {
  const isEmailValid = await checkEmailAndSetStatus(email, setStatus);
  if (isEmailValid) {
    setIsLoading(true);
    await sendVerificationCodeAndHandleModal(email, setStatus, handleOpenModal);
    setIsLoading(false);
  }
};
