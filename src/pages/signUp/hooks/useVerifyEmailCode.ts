import { useMutation } from "@tanstack/react-query";
import authAPI from "@/services/api/authAPI";

const useVerifyEmailCode = (
  verificationCode: string,
  email: string,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  onClose: () => void,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setShake: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const { mutateAsync: handleVerifyEmailCode } = useMutation({
    mutationFn: async () => {
      const response = await authAPI.verifyEmailCode({ email, verificationCode });
      return response;
    },
    onSuccess: () => {
      setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "SUCCESS" }));
      setMessage("인증이 완료되었습니다.");
      onClose();
    },
    onError: (error: ApiError) => {
      if (error.response.data.code === "1401") {
        onClose();
        setStatus((prevStatus) => ({
          ...prevStatus,
          emailStatus: "인증 유효시간을 초과했습니다. 다시 시도해주세요.",
        }));
      } else {
        setStatus((prevStatus) => ({ ...prevStatus, emailStatus: "" }));
        setMessage("인증 코드가 올바르지 않습니다.");
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    },
  });
  return { handleVerifyEmailCode };
};

export default useVerifyEmailCode;
