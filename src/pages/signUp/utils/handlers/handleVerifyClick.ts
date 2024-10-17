import handleVerification from "./handleVerification";

export const handleVerifyClick = async (
  verificationCode: string,
  email: string,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  onClose: () => void,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setShake: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (verificationCode) {
    handleVerification(verificationCode, email, setStatus, onClose, setMessage, setShake);
  } else {
    setMessage("인증 코드를 입력하세요.");
    setShake(true);
    setTimeout(() => setShake(false), 500);
  }
};
