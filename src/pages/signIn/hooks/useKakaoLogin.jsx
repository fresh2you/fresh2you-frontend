import { useEffect } from "react";
import useLogin from "./useLogin";
import { handleKakaoCallback } from "../utils/authUtils";

const useKakaoLogin = (onSuccessCallback, onErrorCallback) => {
  const mutation = useLogin(true, onSuccessCallback, onErrorCallback);

  useEffect(() => {
    const code = handleKakaoCallback();
    if (code) {
      mutation.mutate({
        code: code,
        redirectUri: import.meta.env.VITE_SIGNIN_REDIRECT_URI,
        provider: "KAKAO",
      });
    }
  }, []);

  return mutation;
};

export default useKakaoLogin;
