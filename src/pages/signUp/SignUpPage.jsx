import { useState, useEffect } from 'react';
import { useFunnel } from '@use-funnel/react-router-dom';
import { getStepsConfig } from './stepsConfig';
import { handleSubmit } from './utils/handlers/handleSubmit';
import ErrorMessages from './component/ErrorMessages';
import PasswordFeedback from './component/PasswordFeedback';
import StepFields from './component/StepFields';
import { VerificationModal } from './component/VerificationModal';
import { validationLogic } from './utils/validationLogic';
import { handleConfirmPasswordChange } from './utils/passwordUtils';
import SubmitBtn from './component/buttons/SubmitBtn';
import {
  useResetStatusOnEmailChange,
  useResetStatusOnNicknameChange,
  useResetStatusOnTelChange,
} from './hooks/useResetStatusOnFieldChange';
import { isFormValid } from './utils/validationUtils';
export default function SignUpPage() {
  const funnel = useFunnel({
    id: 'user-signup',
    initial: {
      step: '이메일입력',
      context: {
        email: '',
        password: '',
        nickname: '',
        confirmPassword: '',
        phoneNo: '',
      },
    },
  });
  const [formData, setFormData] = useState({
    email: funnel.context.email,
    password: funnel.context.password,
    confirmPassword: funnel.context.confirmPassword,
    phoneNo: funnel.context.phoneNo,
    nickname: funnel.context.nickname,
  });
  const [status, setStatus] = useState({
    emailStatus: '',
    passwordStatus: '',
    phoneNoStatus: '',
    nicknameStatus: '',
    requestStatus: '',
  });
  const [validity, setValidity] = useState({
    isEmailValid: false,
    isPasswordCombinationValid: false,
    isConfirmPasswordValid: false,
    isPhoneNoValid: false,
    isPhoneNoVerified: false,
    isNicknameValid: false,
  });
  const [passwordFeedbacks, setPasswordFeedbacks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sendAttempts, setSendAttempts] = useState(0);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useResetStatusOnEmailChange(formData.email, setStatus);
  useResetStatusOnNicknameChange(formData.nickname, setStatus);
  useResetStatusOnTelChange(formData.phoneNo, setStatus, setValidity);

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

  const steps = getStepsConfig(formData, setFormData, setStatus, validity, handleOpenModal, sendAttempts);
  const currentStep = funnel.step;

  return (
    <div className="flex">
      <form
        onSubmit={(e) => handleSubmit(e, validity, formData)}
        className="flex flex-col justify-center min-h-screen my-0 mx-auto items-start"
        style={{ width: '376px' }}
      >
        <PasswordFeedback passwordFeedbacks={passwordFeedbacks} />
        <ErrorMessages status={status} sendAttempts={sendAttempts} />
        <StepFields steps={steps} currentStep={currentStep} validity={validity} funnel={funnel} formData={formData} />
        {currentStep === '닉네임입력' && <SubmitBtn validity={validity} />}
      </form>
      {isModalOpen && (
        <VerificationModal
          onClose={handleCloseModal}
          phoneNo={formData.phoneNo}
          validity={validity}
          setValidity={setValidity}
          setStatus={setStatus}
          sendAttempts={sendAttempts}
          setSendAttempts={setSendAttempts}
        />
      )}
    </div>
  );
}
