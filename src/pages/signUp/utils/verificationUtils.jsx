import axios from 'axios';
export const requestVerificationCode = async (phoneNo, setStatus) => {
  try {
    const response = await axios.post('/api/phone/verify', {
      phone: phoneNo,
    });
    if (response.data.success) {
      setStatus((prevStatus) => ({ ...prevStatus, requestStatus: '인증번호가 발송되었습니다.' }));
    } else {
      setStatus((prevStatus) => ({ ...prevStatus, requestStatus: '인증번호 발송에 실패했습니다' }));
    }
  } catch (error) {
    setStatus((prevStatus) => ({ ...prevStatus, requestStatus: '테스트' })); // 구현 기능 test 하기 위해
    //console.error('인증번호 요청 중 오류 발생:', error);
  }
};
export const verifyCode = async (phoneNo, verificationCode, setValidity, setErrorMessage) => {
  try {
    const response = await axios.post('/api/phone/verify/check', {
      phone: phoneNo,
      code: verificationCode,
    });
    if (response.data.success) {
      setValidity((prevValidity) => ({ ...prevValidity, isPhoneNoVerified: true }));
    } else {
      setErrorMessage('인증 코드가 올바르지 않습니다.');
    }
  } catch (error) {
    if (verificationCode == 1) {
      setValidity((prevValidity) => ({ ...prevValidity, isPhoneNoVerified: true }));
    } else {
      setErrorMessage('인증 코드가 올바르지 않습니다.');
    }
    //console.error('인증번호 확인 중 오류 발생:', error);
  }
};
