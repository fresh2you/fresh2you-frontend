import LogoImg from "../../assets/img/logo.svg";
import SignInForm from "./components/SignInForm";
import KakaoIcon from "../../assets/img/kakaotalk.svg";
import { Link } from "react-router-dom";
import { KAKAO_AUTH_URL } from "./utils/authUtils";

import "../../styles/styles.css";
export default function SignInPage() {
  return (
    <div className="bg-custom-green px-4 text-custom-black">
      <div className="flex flex-col justify-center items-center h-screen">
        <LogoImg alt="Fresh 2 You" className="mobile:w-2/5 mobile:max-w-48 mb-3" />
        <SignInForm />
        <div className="my-6 whitespace-nowrap">
          <p className="text-base my-6 font-bold whitespace-nowrap inline">아직 계정이 없으신가요? </p>
          <Link to="../signup/terms" className="sign-up-link">
            가입하기
          </Link>
        </div>
        <hr className="w-72 border-gray-200" />
        <button onClick={() => (window.location.href = KAKAO_AUTH_URL)} className="kakao-btn custom-focus">
          <KakaoIcon alt="카카오톡" width="25px" />
          <span>카카오로 시작하기</span>
        </button>
      </div>
    </div>
  );
}
