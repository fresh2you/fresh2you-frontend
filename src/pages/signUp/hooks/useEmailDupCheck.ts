import { useMutation } from "@tanstack/react-query";
import authAPI from "@/services/api/authAPI";

export const useEmailDupCheck = (email: string, setStatus: React.Dispatch<React.SetStateAction<StatusType>>) => {
  const { mutateAsync: emailCheck } = useMutation({
    mutationFn: async () => {
      const { response } = await authAPI.validateEmail(email);
      return response;
    },
    onSuccess: () => {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "" }));
    },
    onError: () => {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "이메일 주소가 이미 사용 중입니다." }));
    },
  });
  const emailCheckWithReturn = async () => {
    try {
      await emailCheck();
      return true;
    } catch {
      return false;
    }
  };
  return { emailCheck: emailCheckWithReturn };
};
