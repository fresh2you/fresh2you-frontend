import { requestVerificationCode } from '../verificationUtils';
export const handleResendClick = (
  sendAttempts,
  setErrorMessage,
  setTimeLeft,
  setIsResendEnabled,
  phoneNo,
  setStatus,
  setVerificationCode,
  setSendAttempts,
) => {
  if (sendAttempts >= 5) {
    setErrorMessage('하루에 5번만 인증 코드를 요청할 수 있습니다.');
    return;
  }
  setTimeLeft(180);
  setIsResendEnabled(false);
  requestVerificationCode(phoneNo, setStatus);
  setErrorMessage('');
  setVerificationCode('');
  setSendAttempts(sendAttempts + 1);
};
