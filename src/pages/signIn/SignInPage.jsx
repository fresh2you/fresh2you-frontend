import LogoImg from "../../assets/img/logo.svg";
import SignInForm from "./components/SignInForm";
import KakaoIcon from "../../assets/img/kakaotalk.svg";
import { Link } from "react-router-dom";
import { KAKAO_AUTH_URL } from "./utils/authUtils";

import "../../styles/styles.css";
export default function SignInPage() {
  return (
    <div
      className="flex justify-center px-4 py-4 bg-custom-green text-custom-black 
    fixed top-0 bottom-0 left-0 right-0"
    >
      <div className="flex flex-col items-center justify-center">
        <LogoImg alt="Fresh 2 You" className="mb-3 mobile:w-3/5 mobile:max-w-48" />
        <SignInForm />
        <div className="my-6 whitespace-nowrap">
          <p className="inline my-6 text-base font-bold whitespace-nowrap">아직 계정이 없으신가요? </p>
          <Link to="../signup/terms" className="sign-up-link">
            가입하기
          </Link>
        </div>
        <hr className="border-gray-200 w-72" />
        <button onClick={() => (window.location.href = KAKAO_AUTH_URL)} className="kakao-btn custom-focus">
          <KakaoIcon alt="카카오톡" width="25px" />
          <span>카카오로 시작하기</span>
        </button>
      </div>
    </div>
  );
}
