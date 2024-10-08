import { useState } from "react";
import TermsAgreement from "./components/TermsAgreement";
import LogoImg from "../../assets/img/logo.svg";
import "../../styles/styles.css";
import { handleSubmit } from "./handler/handleSubmit";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TermsAgreementPage = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [termsChecked, setTermsChecked] = useState({});
  const navigate = useNavigate();
  const isSocialLoginRedirect = sessionStorage.getItem("socialInfo");
  const socialInfoState = isSocialLoginRedirect ? JSON.parse(isSocialLoginRedirect) : null;

  const handleAgree = (agreed) => {
    setIsAgreed(agreed);
  };

  return (
    <div className="flex items-center w-full min-h-screen p-4">
      <div
        className="flex flex-col items-center mx-auto bg-custom-green rounded-lg py-5 
        mobile:w-11/12 mobile:max-w-[340px]"
      >
        <div className="w-1/2 mb-3">
          <LogoImg alt="Fresh 2 You" />
        </div>
        <TermsAgreement onAgree={handleAgree} termsChecked={termsChecked} setTermsChecked={setTermsChecked} />
        <button
          className={`text-custom-black font-semibold hover:border-transparent rounded-md custom-focus px-3 ${
            isAgreed ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={() => {
            handleSubmit(Boolean(isSocialLoginRedirect), isAgreed, socialInfoState, termsChecked, navigate);
          }}
        >
          {isSocialLoginRedirect ? "회원가입 완료" : "회원가입 계속하기"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TermsAgreementPage;
