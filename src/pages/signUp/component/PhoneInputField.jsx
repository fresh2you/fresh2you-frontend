import '../../../styles/styles.css';
export const PhoneInputField = ({ verificationCode, setVerificationCode, setErrorMessage, shake }) => {
  return (
    <input
      type="text"
      value={verificationCode}
      onChange={(e) => {
        setVerificationCode(e.target.value);
        setErrorMessage('');
      }}
      placeholder="인증 코드를 입력하세요"
      className={`border p-2 rounded-md mb-4 min-w-60 outline-none text-custom-black ${shake ? 'shake' : ''}`}
      style={{ borderColor: '#D3D3D3' }}
    />
  );
};
