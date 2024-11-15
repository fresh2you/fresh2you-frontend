import { useMutation } from "@tanstack/react-query";
import authAPI from "@/services/api/authAPI";

export const useNicknameCheck = (setStatus: React.Dispatch<React.SetStateAction<StatusType>>) => {
  const { mutateAsync: nicknameCheck } = useMutation({
    mutationFn: async (nickname: string) => {
      const { response } = await authAPI.validateNickname(nickname);
      return response;
    },
    onSuccess: () => {
      setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: "SUCCESS" }));
    },
    onError: () => {
      setStatus((prevStatus) => ({
        ...prevStatus,
        nicknameStatus: "닉네임이 이미 사용 중입니다.",
      }));
    },
  });
  return { nicknameCheck };
};
