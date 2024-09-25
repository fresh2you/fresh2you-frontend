import { useMutation } from "@tanstack/react-query";
import { login } from "../api/signIn";
import { kakaoLogin } from "../api/kakaoLogin";
const useLogin = (isSocialLogin, onSuccessCallback, onErrorCallback) => {
  return useMutation({
    mutationFn: isSocialLogin ? kakaoLogin : login,
    onSuccess: (data) => {
      if (data) {
        onSuccessCallback(data);
      } else {
        onSuccessCallback();
      }
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
