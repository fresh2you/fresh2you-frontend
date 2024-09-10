export const handleTimer = (timeLeft, setTimeLeft, setIsResendEnabled, setErrorMessage) => {
  if (timeLeft > 0) {
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  } else {
    setIsResendEnabled(true);
    setErrorMessage('인증 코드 시간이 만료되었습니다.');
  }
};
