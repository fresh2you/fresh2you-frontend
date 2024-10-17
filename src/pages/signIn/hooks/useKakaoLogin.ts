import { useEffect } from "react";
import useLogin from "./useLogin";
import { handleKakaoCallback } from "../utils/authUtils";

interface UseKakaoLoginProps {
  onSuccessCallback: (data: ISocialLoginResponse["data"] | null) => void;
  onErrorCallback: () => void;
}
const useKakaoLogin = ({ onSuccessCallback, onErrorCallback }: UseKakaoLoginProps) => {
  const mutation = useLogin(true, onSuccessCallback, onErrorCallback);

  const redirectUri: string =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_SIGNIN_REDIRECT_URI
      : import.meta.env.VITE_PROD_SIGNIN_REDIRECT_URI;

  useEffect(() => {
    const code = handleKakaoCallback();

    if (code) {
      mutation.mutate({
        code: code,
        redirectUri: redirectUri,
        provider: "KAKAO",
      });
    }
  }, [mutation, redirectUri]);

  return mutation;
};

export default useKakaoLogin;
