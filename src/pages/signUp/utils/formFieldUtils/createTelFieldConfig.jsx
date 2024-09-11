import { requestVerificationCode } from '../verificationUtils';
export const createTelFieldConfig = (formData, setFormData, handleOpenModal, validity, sendAttempts, setStatus) => {
  return {
    label: '전화번호',
    type: 'tel',
    value: formData.phoneNo,
    setValue: (value) => setFormData((prevFormData) => ({ ...prevFormData, phoneNo: value })),
    placeholder: '전화번호를 입력하세요',
    autoComplete: 'tel',
    button: (
      <button
        key="phone-verification-request"
        type="button"
        onClick={() => {
          if (formData.phoneNo) {
            handleOpenModal();
            requestVerificationCode(formData.phoneNo, setStatus);
          } else {
            setStatus((prevStatus) => ({ ...prevStatus, phoneNoStatus: '전화번호를 입력하세요.' }));
          }
        }}
        className={`flex items-center justify-center min-w-20 h-10 ml-2 rounded-md px-2 whitespace-nowrap hover:border-transparent text-white 
          hover:outline-none ${validity.isPhoneNoVerified ? 'bg-custom-gray-dark' : 'bg-custom-green'} `}
        disabled={validity.isPhoneNoValid || sendAttempts === 5}
        style={{
          backgroundColor: validity.isPhoneNoVerified ? '#7D7D7D' : '#40A578',
        }}
      >
        {validity.isPhoneNoVerified ? '완료' : validity.isPhoneNoValid ? '전송됨' : '전송'}
      </button>
    ),
  };
};
