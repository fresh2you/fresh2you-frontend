import React, { useState, useEffect, useRef } from 'react';
import { useFunnel } from '@use-funnel/react-router-dom';
import InputField from './component/InputField';
import { getStepsConfig } from './stepsConfig';
import {
  checkEmailDuplicate,
  checkNicknameDuplicate,
  handleConfirmPasswordChange,
  mockCheckEmailDuplicate,
  mockCheckNicknameDuplicate,
  isFormValid,
  validatePassword,
} from './utils/validationUtils';
import blockIcon from '../../assets/icons/block.svg';
import '../../styles/styles.css';
import { handleSubmit } from './utils/handleSubmit';
import NextButton from './component/NextButton';
import ErrorMessages from './component/ErrorMessage';
import PasswordFeedback from './component/PasswordFeedback';
import StepFields from './component/StepFields';

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
    emailStatus: '',
    passwordStatus: '',
    nicknameStatus: '',
  });
  const [validity, setValidity] = useState({
    isEmailValid: false,
    isPasswordCombinationValid: false,
    isConfirmPasswordValid: false,
    isNicknameValid: false,
  });
  const [passwordFeedbacks, setPasswordFeedbacks] = useState([]);

  useEffect(() => {
    setValidity({
      isEmailValid: !Boolean(status.emailStatus) && !!formData.email,
      isPasswordCombinationValid: validatePassword(formData.password).isValid,
      isConfirmPasswordValid:
        !Boolean(status.passwordStatus) &&
        !!formData.password &&
        !!formData.confirmPassword &&
        formData.confirmPassword === formData.password,
      isNicknameValid: !Boolean(status.nicknameStatus) && !!formData.nickname,
    });
  }, [status, formData]);
  console.log(validity);

  useEffect(() => {
    if (formData.email !== funnel.context.email) {
      setValidity((prev) => ({
        ...prev,
        isEmailValid: false,
      }));
    }
  }, [formData.email, funnel.context.email]);

  useEffect(() => {
    const passwordFeedbackMessages = [];
    if (formData.password) {
      const passwordValidation = validatePassword(formData.password);

      if (!passwordValidation.minLengthValid) passwordFeedbackMessages.push('비밀번호는 최소 8자 이상이어야 합니다.');
      if (!passwordValidation.hasUpperCase) passwordFeedbackMessages.push('비밀번호에 대문자를 포함해야 합니다.');
      if (!passwordValidation.hasNumber) passwordFeedbackMessages.push('비밀번호에 숫자를 포함해야 합니다.');
      if (!passwordValidation.hasSpecialCharacter)
        passwordFeedbackMessages.push('비밀번호에 특수문자를 포함해야 합니다.');
    }

    setPasswordFeedbacks(passwordFeedbackMessages);
  }, [formData.password]);

  useEffect(() => {
    handleConfirmPasswordChange(formData.confirmPassword, formData.password, formData, setFormData, status, setStatus);
  }, [formData.password, formData.confirmPassword]);

  useEffect(() => {
    if (formData.nickname !== funnel.context.nickname) {
      setValidity((prev) => ({
        ...prev,
        isNicknameValid: false,
      }));
    }
  }, [formData.nickname, funnel.context.nickname]);

  const steps = getStepsConfig(
    formData,
    setFormData,
    status,
    setStatus,
    mockCheckEmailDuplicate,
    mockCheckNicknameDuplicate,
    handleConfirmPasswordChange,
    validity,
  );
  const currentStep = funnel.step;

  return (
    <div className="flex">
      <form
        onSubmit={(e) => handleSubmit(e, validity, formData)}
        className="flex flex-col justify-center min-h-screen bg-gray-100 my-0 mx-auto"
        style={{ minWidth: '376px' }}
      >
        <PasswordFeedback passwordFeedbacks={passwordFeedbacks} />
        <ErrorMessages status={status} />
        <StepFields steps={steps} currentStep={currentStep} validity={validity} funnel={funnel} formData={formData} />
        {currentStep === '닉네임입력' && (
          <button
            type="submit"
            className="px-4 py-2 rounded submit-button"
            style={{
              outline: 'none',
              borderColor: 'transparent',
            }}
          >
            제출
          </button>
        )}
      </form>
    </div>
  );
}
