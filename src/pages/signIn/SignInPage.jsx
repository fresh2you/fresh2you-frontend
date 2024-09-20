import logo from "../../assets/img/logo.png";
import SignInForm from "./components/SignInForm";
import kakao from "../../assets/img/kakaotalk.png";
import { Link } from "react-router-dom";
import { KAKAO_AUTH_URL } from "./utils/authUtils";
import "../../styles/styles.css";
export default function SignInPage() {
  return (
    <div className="bg-custom-green min-h-screen px-4 text-custom-black mobile:py-8">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <img src={logo} alt="Fresh 2 You" className="mobile: max-w-[150px] tablet-sm:max-w-[200px]" />
        <SignInForm />
        <div className="my-6 whitespace-nowrap">
          <p className="text-base my-6 font-bold whitespace-nowrap inline">아직 계정이 없으신가요? </p>
          <Link to="../signup/info" className="sign-up-link">
            가입하기
          </Link>
        </div>
        <hr className="w-72 border-gray-200" />
        <button onClick={() => (window.location.href = KAKAO_AUTH_URL)} className="kakao-btn custom-focus">
          <img src={kakao} alt="카카오톡" width="25px" />
          <span>카카오로 시작하기</span>
        </button>
      </div>
    </div>
  );
}
