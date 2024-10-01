import { useMutation } from "@tanstack/react-query";
import { login } from "../api/signIn";
import { kakaoLogin } from "../api/kakaoLogin";
import { useQueryClient } from "@tanstack/react-query";

const useLogin = (isSocialLogin, onSuccessCallback, onErrorCallback) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: isSocialLogin ? kakaoLogin : login,
    onSuccess: (data) => {
      const { token, loginMember } = data;

      if (token) {
        localStorage.setItem("accessToken", token.accessToken);
        localStorage.setItem("accessExpiredAt", token.accessExpiredAt);
      }

      queryClient.setQueryData(["userInfo"], loginMember);

      if (isSocialLogin) onSuccessCallback(data);
      else onSuccessCallback();
    },
    onError: (error) => {
      if (error) {
        onErrorCallback(error);
      } else {
        onErrorCallback();
      }
    },
  });
};

export default useLogin;
