import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TermsAgreement from "./components/TermsAgreement";
import logoImg from "../../assets/img/logo.png";
import "../../styles/styles.css";

const TermsAgreementPage = () => {
  const navigate = useNavigate();
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgree = (agreed) => {
    setIsAgreed(agreed);
  };

  return (
    <div className="min-h-screen bg-custom-yellow flex items-center p-4">
      <div
        className="flex flex-col items-center mx-auto bg-custom-green rounded-lg py-4 desktop-sm:py-5 
      mobile:px-2 tablet-sm:px-4 min-w-[288px]"
      >
        <img src={logoImg} alt="Fresh 2 You" className="mobile:w-32 mb-3 desktop-sm:w-40" />
        <TermsAgreement onAgree={handleAgree} />
        <button
          className={`text-custom-black font-semibold hover:border-transparent rounded-md custom-focus ${
            isAgreed ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={() => {
            if (!isAgreed) {
              alert("회원가입을 진행하기 위해서는 약관에 동의해야 합니다.");
              return;
            }
            navigate("../signup/info");
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default TermsAgreementPage;
