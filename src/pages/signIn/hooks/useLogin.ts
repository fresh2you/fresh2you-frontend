import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/signIn";
import { kakaoLogin } from "../api/kakaoLogin";

type SuccessCallback = (response: ISocialLoginResponse["data"] | null) => void;
type ErrorCallback = () => void;

export interface KakaoLoginParams {
  code: string;
  redirectUri: string;
  provider: "KAKAO";
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export type LoginResponse = ISocialLoginResponse | IEmailLoginResponse | null;

const useLogin = (isSocialLogin: boolean, onSuccessCallback: SuccessCallback, onErrorCallback: ErrorCallback) => {
  const queryClient = useQueryClient();
  return useMutation<LoginResponse, unknown, KakaoLoginParams | LoginCredentials>({
    mutationFn: async (params: KakaoLoginParams | LoginCredentials): Promise<LoginResponse> => {
      if (isSocialLogin) {
        return kakaoLogin(params as KakaoLoginParams);
      } else {
        return login(params as LoginCredentials);
      }
    },
    onSuccess: (response) => {
      if (response?.success) {
        queryClient.setQueryData(["userInfo"], response.data?.loginMember);
        if (isSocialLogin) {
          onSuccessCallback(response.data as ISocialLoginResponse["data"]);
        } else {
          onSuccessCallback(null);
        }
      } else {
        onSuccessCallback(null);
      }
    },
    onError: () => {
      onErrorCallback();
    },
  });
};

export default useLogin;
