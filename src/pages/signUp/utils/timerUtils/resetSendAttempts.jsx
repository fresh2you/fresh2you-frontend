export const resetSendAttemptsIfExpired = (setSendAttempts) => {
  const lastSendTime = localStorage.getItem('lastSendTime');

  if (lastSendTime) {
    const timeElapsed = Date.now() - parseInt(lastSendTime, 10);
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (timeElapsed >= oneDayInMilliseconds) {
      setSendAttempts(0);
      localStorage.removeItem('lastSendTime');
    }
  }
};
