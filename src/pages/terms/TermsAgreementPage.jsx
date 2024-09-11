import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TermsAgreement from './components/TermsAgreement';
import logoImg from '../../assets/img/logo.png';
import '../../styles/styles.css';

const TermsAgreementPage = () => {
  const navigate = useNavigate();
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgree = (agreed) => {
    setIsAgreed(agreed);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-custom-yellow">
      <div className="w-96 flex flex-col items-center bg-custom-green py-4 rounded-lg">
        <img src={logoImg} alt="Fresh 2 You" className="max-w-52" />
        <TermsAgreement onAgree={handleAgree} />
        <button
          className={`text-custom-black font-semibold login-button hover:border-transparent focus:outline-none ${
            isAgreed ? 'cursor-pointer' : 'cursor-not-allowed'
          }`}
          onClick={() => {
            if (!isAgreed) {
              alert('회원가입을 진행하기 위해서는 약관에 동의해야 합니다.');
              return;
            }
            navigate('../signup/info');
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default TermsAgreementPage;
