import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useStepsConfig } from "../useStepsConfig";
import { useResetStatusOnInputChange } from "../hooks/useResetStatusOnInputChange";
import { usePasswordValidation } from "../hooks/usePasswordValidation";
import { useFormValidation } from "../hooks/useFormValidation";
import useLogin from "../../signIn/hooks/useLogin";
import { handleSubmit, onSuccessCallback, onErrorCallback } from "../utils/handlers/callbackHandlers";
import { useFunnel } from "@use-funnel/react-router-dom";
import { UseFunnelResults } from "@use-funnel/react-router-dom";
import { useSignUp } from "./useSignup";

export function useSignUpForm({ funnelId, isAgreedToTerms }: UseSignUpFormProps) {
  const navigate = useNavigate();

  const funnel: UseFunnelResults<SignUpStepContext, RouteOption> = useFunnel<SignUpStepContext>({
    id: funnelId,
    initial: {
      step: "이메일입력",
      context: {
        email: "",
      },
    },
    steps: {
      이메일입력: {
        guard: (data): data is { email: string } => typeof data === "object" && data !== null && "email" in data,
      },
      비밀번호입력: {
        guard: (data): data is { email: string; password: string } =>
          typeof data === "object" && data !== null && "password" in data,
      },
      비밀번호확인: {
        guard: (data): data is { email: string; password: string; confirmPassword: string } =>
          typeof data === "object" && data !== null && "confirmPassword" in data,
      },
      닉네임입력: {
        guard: (data): data is { email: string; password: string; confirmPassword: string; nickname: string } =>
          typeof data === "object" && data !== null && "nickname" in data,
      },
    },
  });

  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  const [status, setStatus] = useState({
    emailStatus: "",
    passwordStatus: "",
    nicknameStatus: "",
  });

  const [validity, setValidity] = useState({
    isEmailValid: false,
    isPasswordValid: false,
    isConfirmPasswordValid: false,
    isNicknameValid: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  useResetStatusOnInputChange(formData.email, formData.nickname, setStatus);
  useFormValidation(formData, status, setValidity);
  usePasswordValidation(formData, setFormData, setStatus, setValidity);

  const steps = useStepsConfig(formData, setFormData, setStatus, validity, setIsLoading);
  const currentStep = funnel.step;

  const { mutate: login } = useLogin(false, () => onSuccessCallback(navigate), onErrorCallback);
  const { signUp } = useSignUp(login, formData, isAgreedToTerms);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleSubmit(e, validity, setIsLoading, signUp);
  };
  return {
    formData,
    status,
    validity,
    isLoading,
    steps,
    currentStep,
    onSubmit,
    funnel,
  };
}
