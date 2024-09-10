import { useEffect } from 'react';

export const useResetStatusOnEmailChange = (email, setStatus) => {
  useEffect(() => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      emailStatus: '',
    }));
  }, [email]);
};
export const useResetStatusOnNicknameChange = (nickname, setStatus) => {
  useEffect(() => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      nicknameStatus: '',
    }));
  }, [nickname]);
};
export const useResetStatusOnTelChange = (phoneNo, setStatus, setValidity) => {
  useEffect(() => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      phoneNoStatus: '',
      requestStatus: '',
    }));
    setValidity((prevValidity) => ({
      ...prevValidity,
      isPhoneNoVerified: false,
    }));
  }, [phoneNo]);
};
