import { checkEmailDuplicate, sendEmailVerificationCode } from "../../api/verifications";
const handleEmailCheck = async (email, setStatus, handleOpenModal) => {
  if (!email) {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 주소를 입력해주세요." }));
    return;
  }
  try {
    const isDuplicate = !(await checkEmailDuplicate(email));
    if (isDuplicate) {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 주소가 이미 사용 중입니다." }));
      return;
    }

    const emailSent = await sendEmailVerificationCode(email);
    if (emailSent) {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "" }));
      handleOpenModal();
    } else {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 인증 코드 전송을 실패했습니다." }));
    }
  } catch (error) {
    setStatus((prevStatus) => ({
      ...prevStatus,
      emailStatus: "이메일 확인 중 오류가 발생했습니다. 다시 시도해 주세요.",
    }));
  }
};
export default handleEmailCheck;
