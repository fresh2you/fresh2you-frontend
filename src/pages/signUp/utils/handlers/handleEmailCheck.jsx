import { checkEmailDuplicate, sendEmailVerificationCode } from "../../api/verifications";
const handleEmailCheck = async () => {
  if (!formData.email) {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 주소를 입력해주세요." }));
    return;
  }

  try {
    const isDuplicate = await checkEmailDuplicate(formData.email);
    if (isDuplicate) {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 주소가 이미 사용 중입니다." }));
      return;
    }

    const emailSent = await sendEmailVerificationCode(formData.email);
    if (emailSent) {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "인증 코드가 전송되었습니다." }));
      handleOpenModal();
    } else {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 인증 코드 전송 실패." }));
    }
  } catch (error) {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 확인에 실패했습니다." }));
  }
};
export default handleEmailCheck;
