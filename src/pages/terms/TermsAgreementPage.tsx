import { useState } from "react";
import TermsAgreement from "./components/TermsAgreement";
import LogoImg from "../../assets/img/logo.svg";
import { handleSubmit } from "./handler/handleSubmit";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/styles.css";

type TermsCheckedState = {
  [key: string]: boolean;
};

const TermsAgreementPage = () => {
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [termsChecked, setTermsChecked] = useState<TermsCheckedState>({});
  const navigate = useNavigate();
  const isSocialLoginRedirect = sessionStorage.getItem("socialInfo");
  const socialInfoState = isSocialLoginRedirect ? JSON.parse(isSocialLoginRedirect) : null;

  const handleAgree = () => {
    setIsAgreed(true);
  };

  return (
    <div className="flex items-center w-full h-full min-h-screen p-4">
      <main
        className="flex flex-col items-center mx-auto bg-custom-green rounded-md py-5 
        mobile:w-11/12 mobile:max-w-[360px] min-h-auto
      "
      >
        <header className="w-1/2 mb-3">
          <LogoImg alt="Fresh 2 You" />
        </header>
        <TermsAgreement onAgree={handleAgree} termsChecked={termsChecked} setTermsChecked={setTermsChecked} />
        <footer>
          <button
            className={`text-custom-black font-semibold rounded-md custom-focus-light 
              text-custom-input px-3 ${isAgreed ? "cursor-pointer" : "cursor-not-allowed"}`}
            onClick={() => {
              handleSubmit(Boolean(isSocialLoginRedirect), socialInfoState, termsChecked, navigate);
            }}
          >
            {isSocialLoginRedirect ? "회원가입 완료" : "회원가입 계속하기"}
          </button>
        </footer>
      </main>
      <ToastContainer />
    </div>
  );
};

export default TermsAgreementPage;
