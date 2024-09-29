import { useState } from "react";
import { useFunnel } from "@use-funnel/react-router-dom";
import { getStepsConfig } from "./stepsConfig";
import { handleSubmit } from "./utils/handlers/handleSubmit";
import ErrorMessages from "./component/errormsg/ErrorMessages";
import PasswordFeedback from "./component/PasswordFeedback";
import StepFields from "./component/StepFields";
import SubmitBtn from "./component/buttons/SubmitBtn";
import { useResetStatusOnEmailChange, useResetStatusOnNicknameChange } from "./hooks/useResetStatusOnFieldChange";
import EmailVerificationModal from "./component/EmailVerificationModal";
import { usePasswordValidation } from "./hooks/usePasswordValidation";
import { useFormValidation } from "./hooks/useFormValidation";
import { useNavigate } from "react-router-dom";
import ErrorModal from "./component/ErrorModal";
import { useLocation } from "react-router-dom";
import { Loading } from "../redirection/component/Loading";
import useRedirectIfNotAgreed from "./hooks/useRedirectIfNotAgreed";
import useLogin from "../signIn/hooks/useLogin";

export default function SignUpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAgreedToTerms, setIsAgreedToTerms] = useState(location.state?.termsAgreements || false);

  useRedirectIfNotAgreed(isAgreedToTerms);

  const funnel = useFunnel({
    id: "user-signup",
    initial: {
      step: "이메일입력",
      context: {
        email: "",
        password: "",
        nickname: "",
        confirmPassword: "",
      },
    },
  });

  const [formData, setFormData] = useState({
    email: funnel.context.email,
    password: funnel.context.password,
    confirmPassword: funnel.context.confirmPassword,
    nickname: funnel.context.nickname,
  });

  const [status, setStatus] = useState({
    emailStatus: "",
    passwordStatus: "",
    nicknameStatus: "",
  });

  const [validity, setValidity] = useState({
    isEmailValid: false,
    isPasswordCombinationValid: false,
    isConfirmPasswordValid: false,
    isNicknameValid: false,
  });

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState("");

  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenErrorModal = () => setIsErrorModalOpen(true);
  const handleCloseErrorModal = () => {
    setIsErrorModalOpen(false);
    setErrorModalMessage("");
  };

  const handleOpenVerificationModal = () => setIsVerificationModalOpen(true);
  const handleCloseVerificationModal = () => setIsVerificationModalOpen(false);

  useResetStatusOnEmailChange(formData.email, setStatus);
  useResetStatusOnNicknameChange(formData.nickname, setStatus);
  useFormValidation(formData, status, setValidity, funnel);

  const { passwordFeedbacks } = usePasswordValidation(formData, setFormData, setStatus);
  const steps = getStepsConfig(formData, setFormData, setStatus, validity, handleOpenVerificationModal, setIsLoading);
  const currentStep = funnel.step;

  const onSuccessCallback = () => {
    navigate("/auth/signup/complete");
  };

  const onErrorCallback = (error) => {
    console.error("회원가입후 로그인 실패", error);
    setErrorModalMessage("회원가입 후 로그인에 실패했습니다. 잠시 후 다시 시도해주세요");
    handleOpenErrorModal();
  };

  const { mutate: login } = useLogin(false, onSuccessCallback, onErrorCallback);

  const handleFormSubmit = (e) => {
    handleSubmit(
      e,
      validity,
      formData,
      navigate,
      setErrorModalMessage,
      handleOpenErrorModal,
      location.state,
      funnel,
      setFormData,
      setStatus,
      setValidity,
      setIsLoading,
      login,
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col justify-center min-h-screen mx-auto w-[290px] items-start py-8"
          >
            <PasswordFeedback passwordFeedbacks={passwordFeedbacks} />
            <ErrorMessages status={status} />
            <StepFields
              steps={steps}
              currentStep={currentStep}
              validity={validity}
              funnel={funnel}
              formData={formData}
            />
            {currentStep === "닉네임입력" && <SubmitBtn validity={validity} />}
          </form>
          {isErrorModalOpen && <ErrorModal message={errorModalMessage} onClose={handleCloseErrorModal} />}
          {isVerificationModalOpen && (
            <EmailVerificationModal
              onClose={handleCloseVerificationModal}
              email={formData.email}
              setStatus={setStatus}
              isEmailValid={validity.isEmailValid}
            />
          )}
        </>
      )}
    </>
  );
}
