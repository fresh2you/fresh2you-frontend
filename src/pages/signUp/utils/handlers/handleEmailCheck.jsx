import { checkEmailDuplicate, sendEmailVerificationCode } from "../../api/verifications";
const checkEmailAndSetStatus = async (email, setStatus) => {
  if (!email) {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 주소를 입력해주세요." }));
    return false;
  }

  try {
    await checkEmailDuplicate(email);
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "" }));
    return true;
  } catch {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 주소가 이미 사용 중입니다." }));
    return false;
  }
};

const sendVerificationCodeAndHandleModal = async (email, setStatus, handleOpenModal) => {
  try {
    await sendEmailVerificationCode(email);
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "" }));
    handleOpenModal();
  } catch {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 인증 코드 전송을 실패했습니다." }));
  }
};

export const handleEmailCheck = async (email, setStatus, handleOpenModal) => {
  const isEmailValid = await checkEmailAndSetStatus(email, setStatus);

  if (isEmailValid) {
    await sendVerificationCodeAndHandleModal(email, setStatus, handleOpenModal);
  }
};
