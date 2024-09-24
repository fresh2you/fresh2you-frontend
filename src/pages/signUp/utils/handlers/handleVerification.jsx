import { verifyEmailCode } from "../../api/verifications";
const handleVerification = async (code, email, setStatus, onClose, setMessage, setShake) => {
  try {
    const isVerified = await verifyEmailCode(email, code);
    console.log(isVerified);
    if (isVerified) {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "SUCCESS" }));
      setMessage("인증이 완료되었습니다.");
      onClose();
    } else {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "" }));
      setMessage("인증 코드가 올바르지 않습니다.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  } catch {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "인증 코드 확인에 실패했습니다." }));
  }
};
export default handleVerification;
