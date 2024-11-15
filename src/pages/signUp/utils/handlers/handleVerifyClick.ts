export const handleVerifyClick = async (
  verificationCode: string,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setShake: React.Dispatch<React.SetStateAction<boolean>>,
  handleVerifyEmailCode: () => void,
) => {
  if (verificationCode) {
    handleVerifyEmailCode();
  } else {
    setMessage("인증 코드를 입력하세요.");
    setShake(true);
    setTimeout(() => setShake(false), 500);
  }
};
