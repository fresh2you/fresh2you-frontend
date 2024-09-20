import { verifyEmailCode } from "../../api/verifications";
const handleVerification = async (code, email, setStatus, handleCloseModal) => {
  try {
    const isVerified = await verifyEmailCode(email, code);
    if (isVerified) {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "SUCCESS" }));
      handleCloseModal();
    } else {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "인증 코드가 올바르지 않습니다." }));
    }
  } catch {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "인증 코드 확인에 실패했습니다." }));
  }
};
export default handleVerification;
