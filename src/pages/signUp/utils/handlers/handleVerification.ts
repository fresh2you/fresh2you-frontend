import authAPI from "@/services/api/authAPI";

const handleVerification = async (
  verificationCode: string,
  email: string,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  onClose: () => void,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setShake: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    await authAPI.verifyEmailCode({ email, verificationCode });
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
