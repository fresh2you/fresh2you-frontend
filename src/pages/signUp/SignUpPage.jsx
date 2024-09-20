import { useState, useEffect } from "react";
import { useFunnel } from "@use-funnel/react-router-dom";
import { getStepsConfig } from "./stepsConfig";
import { handleSubmit } from "./utils/handlers/handleSubmit";
import ErrorMessages from "./component/ErrorMessages";
import PasswordFeedback from "./component/PasswordFeedback";
import StepFields from "./component/StepFields";
import { validationLogic } from "./utils/validationLogic";
import { handleConfirmPasswordChange } from "./utils/passwordUtils";
import SubmitBtn from "./component/buttons/SubmitBtn";
import { useResetStatusOnEmailChange, useResetStatusOnNicknameChange } from "./hooks/useResetStatusOnFieldChange";
import EmailVerificationModal from "./component/EmailVerificationModal";

export default function SignUpPage() {
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
  const [passwordFeedbacks, setPasswordFeedbacks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useResetStatusOnEmailChange(formData.email, setStatus);
  useResetStatusOnNicknameChange(formData.nickname, setStatus);

  useEffect(() => {
    validationLogic.updateValidity(formData, status, setValidity, funnel);
  }, [status, formData]);

  useEffect(() => {
    const passwordFeedbackMessages = validationLogic.getPasswordFeedbackMessages(formData.password);
    setPasswordFeedbacks(passwordFeedbackMessages);
    if (formData.confirmPassword) {
      handleConfirmPasswordChange(formData.confirmPassword, formData.password, setFormData, setStatus);
    }
  }, [formData.password, formData.confirmPassword]);
  useEffect(() => {
    console.log(status.emailStatus);
  }, [status.emailStatus]);

  const steps = getStepsConfig(formData, setFormData, setStatus, validity, handleOpenModal);
  const currentStep = funnel.step;
  console.log(validity);
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e, validity, formData)}
        className="flex flex-col justify-center min-h-screen my-0 mx-auto w-[290px] items-start"
      >
        <PasswordFeedback passwordFeedbacks={passwordFeedbacks} />
        <ErrorMessages status={status} />
        <StepFields steps={steps} currentStep={currentStep} validity={validity} funnel={funnel} formData={formData} />
        {currentStep === "닉네임입력" && <SubmitBtn validity={validity} />}
      </form>
      {isModalOpen && (
        <EmailVerificationModal
          onClose={handleCloseModal}
          email={formData.email}
          setStatus={setStatus}
          handleCloseModal={handleCloseModal}
          isEmailValid={validity.isEmailValid}
        />
      )}
    </>
  );
}
