import { openVerificationModal } from "./modalHandlers";
import authAPI from "@/services/api/authAPI";

const checkEmailAndSetStatus = async (email: string, setStatus: React.Dispatch<React.SetStateAction<StatusType>>) => {
  if (!email) {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 주소를 입력해주세요." }));
    return false;
  }

  try {
    await authAPI.validateEmail(email);
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "" }));
    return true;
  } catch {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 주소가 이미 사용 중입니다." }));
    return false;
  }
};

const sendVerificationCodeAndHandleModal = async (
  email: string,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  isEmailValid: boolean,
) => {
  try {
    await authAPI.requestEmailCode(email);
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "" }));
    openVerificationModal(email, setStatus, isEmailValid);
  } catch (error) {
    const apiError = error as ApiError;
    if (apiError.response.data.code === "1400") {
      setStatus((prevStatus) => ({
        ...prevStatus,
        emailStatus: "하루 인증 요청 횟수를 초과했습니다.",
      }));
    } else {
      setStatus((prevStatus) => ({
        ...prevStatus,
        emailStatus: "이메일 인증 코드 전송에 실패했습니다.",
      }));
    }
  }
};

export const handleEmailCheck = async (
  email: string,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const isEmailValid = await checkEmailAndSetStatus(email, setStatus);
  if (isEmailValid) {
    setIsLoading(true);
    await sendVerificationCodeAndHandleModal(email, setStatus, isEmailValid);
    setIsLoading(false);
  }
};
