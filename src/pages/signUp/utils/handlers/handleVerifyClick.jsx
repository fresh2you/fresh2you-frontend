import { verifyCode } from '../verificationUtils';
export const handleVerifyClick = (
  timeLeft,
  verificationCode,
  phoneNo,
  setValidity,
  validity,
  setErrorMessage,
  setShake,
) => {
  if (timeLeft) {
    if (verificationCode) {
      verifyCode(phoneNo, verificationCode, setValidity, setErrorMessage);
      if (!validity.isPhoneNoVerified) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    } else {
      setErrorMessage('인증 코드를 입력하세요.');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  } else {
    setErrorMessage('인증 코드 시간이 만료되었습니다.');
    setShake(true);
    setTimeout(() => setShake(false), 500);
  }
};
