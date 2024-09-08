import { useEffect } from 'react';

const usePhoneNoVerification = (validity, onClose, setErrorMessage, setVerificationCode) => {
  useEffect(() => {
    if (validity.isPhoneNoVerified) {
      onClose();
      setErrorMessage('');
      setVerificationCode('');
    }
  }, [validity.isPhoneNoVerified, onClose, setErrorMessage, setVerificationCode]);
};

export default usePhoneNoVerification;
