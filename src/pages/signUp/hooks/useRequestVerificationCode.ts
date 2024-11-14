import { useMutation } from "@tanstack/react-query";
import authAPI from "@/services/api/authAPI";
import { openVerificationModal } from "../utils/handlers/modalHandlers";

export const useRequestVerificationCode = (
  email: string,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  isEmailValid: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const { mutateAsync: requestVerify } = useMutation({
    mutationFn: async () => {
      setIsLoading(true);
      return authAPI.requestEmailCode(email);
    },
    onSuccess: () => {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "" }));
      openVerificationModal(email, setStatus, isEmailValid);
      setIsLoading(false);
    },
    onError: (error: ApiError) => {
      if (error.response.data.code === "1400") {
        setStatus((prevStatus) => ({
          ...prevStatus,
          emailStatus: "하루 인증 요청 횟수를 초과했습니다.",
        }));
      } else {
        setStatus((prevStatus) => ({
          ...prevStatus,
          emailStatus: "이메일 인증 코드 전송에 실패했습니다. 이메일 주소를 확인해주세요.",
        }));
      }
      setIsLoading(false);
    },
  });

  return { requestVerify };
};
