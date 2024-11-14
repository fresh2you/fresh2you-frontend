const checkEmailAndSetStatus = async (
  email: string,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  emailCheck: () => void,
) => {
  if (!email) {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 주소를 입력해주세요." }));
    return false;
  }
  return emailCheck();
};

export const handleEmailCheck = async (
  email: string,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  emailCheck: () => Promise<boolean>,
  requestVerify: () => void,
) => {
  const isEmailValid = await checkEmailAndSetStatus(email, setStatus, emailCheck);
  if (isEmailValid) {
    requestVerify();
  }
};
