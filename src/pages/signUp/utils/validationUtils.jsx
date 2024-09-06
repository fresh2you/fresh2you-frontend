import { useState, useEffect } from 'react';
import { api2 } from '../../../services/api2';

export const mockCheckEmailDuplicate = async (email, status, setStatus) => {
  if (email === 'test@example.com') {
    setStatus({ ...status, emailStatus: '이메일 주소가 이미 사용 중입니다.' });
  } else {
    setStatus({ ...status, emailStatus: '' });
  }
  return email === 'test@example.com';
};
export const mockCheckNicknameDuplicate = async (nickname, status, setStatus) => {
  if (nickname === 'test') {
    setStatus({ ...status, nicknameStatus: '닉네임이 이미 사용 중입니다.' });
  } else {
    setStatus({ ...status, nicknameStatus: '' });
  }
  return nickname === 'test';
};
export const checkEmailDuplicate = async (email, status, setStatus) => {
  try {
    const isDuplicate = await api2.checkEmailDuplicate(email);
    setStatus({ ...status, emailStatus: isDuplicate ? '이메일 주소가 이미 사용 중입니다.' : '' });
  } catch (error) {
    console.error('이메일 중복 확인 중 오류 발생:', error);
  }
};
export const handleConfirmPasswordChange = (value, password, formData, setFormData, status, setStatus) => {
  setFormData({ ...formData, confirmPassword: value });
  if (value !== password && formData.confirmPassword !== password && !!password && !!value) {
    setStatus({ ...status, passwordStatus: '비밀번호가 일치하지 않습니다.' });
  } else {
    setStatus({ ...status, passwordStatus: '' });
  }
};
export const checkNicknameDuplicate = async (nickname, status, setStatus) => {
  try {
    const isDuplicate = await api2.checkNicknameDuplicate(nickname);
    setStatus({ ...status, nicknameStatus: isDuplicate ? '닉네임이 이미 사용 중입니다.' : '' });
  } catch (error) {
    console.error('닉네임 중복 확인 중 발생:', error);
  }
};
export const isNextButtonDisabled = (currentStep, validity) => {
  const conditions = {
    이메일입력: !validity.isEmailValid,
    비밀번호입력: !validity.isPasswordCombinationValid,
    비밀번호확인: !validity.isConfirmPasswordValid,
  };

  return conditions[currentStep] || false;
};
export const isFormValid = (validity) =>
  validity.isEmailValid &&
  validity.isPasswordCombinationValid &&
  validity.isConfirmPasswordValid &&
  validity.isNicknameValid;
export const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return {
    minLengthValid: password.length >= minLength,
    hasUpperCase: hasUpperCase,
    hasNumber: hasNumber,
    hasSpecialCharacter: hasSpecialCharacter,
    isValid: password.length >= minLength && hasUpperCase && hasNumber && hasSpecialCharacter,
  };
};
