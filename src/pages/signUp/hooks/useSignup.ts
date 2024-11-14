import { useMutation } from "@tanstack/react-query";
import authAPI from "@/services/api/authAPI";
import { onErrorCallback } from "../utils/handlers/callbackHandlers";
import { KakaoLoginParams, LoginCredentials } from "@/pages/signIn/hooks/useLogin";

export const useSignUp = (
  login: (variables: KakaoLoginParams | LoginCredentials) => void,
  formData: FormDataType,
  isAgreedToTerms: TermAgreement[],
) => {
  const { mutateAsync: signUp } = useMutation({
    mutationFn: async () => {
      await authAPI.signUp({
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        nickname: formData.nickname,
        termsAgreements: isAgreedToTerms,
        provider: "EMAIL",
        providerId: null,
      });
    },
    onSuccess: () => {
      login({ email: formData.email, password: formData.password });
    },
    onError: () => {
      onErrorCallback();
    },
  });

  return { signUp };
};
