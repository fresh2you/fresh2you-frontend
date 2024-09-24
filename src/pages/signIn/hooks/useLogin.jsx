import { useMutation } from "@tanstack/react-query";
import { mockLogin } from "../api/signIn";
import { kakaoMockLogin } from "../api/kakaoMockLogin";
const useLogin = (isSocialLogin, onSuccessCallback, onErrorCallback) => {
  return useMutation({
    mutationFn: isSocialLogin ? kakaoMockLogin : mockLogin,
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
