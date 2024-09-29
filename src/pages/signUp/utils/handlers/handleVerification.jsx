import { verifyEmailCode } from "../../api/verifications";
const handleVerification = async (code, email, setStatus, onClose, setMessage, setShake) => {
  try {
    await verifyEmailCode(email, code);
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "SUCCESS" }));
    setMessage("인증이 완료되었습니다.");
    onClose();
  } catch {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "" }));
    setMessage("인증 코드가 올바르지 않습니다.");
    setShake(true);
    setTimeout(() => setShake(false), 500);
  }
};
export default handleVerification;
