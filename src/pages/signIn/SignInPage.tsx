import LogoImg from "../../assets/img/logo.svg";
import SignInForm from "./components/SignInForm";
import KakaoIcon from "../../assets/img/kakaotalk.svg";
import { Link } from "react-router-dom";
import { KAKAO_AUTH_URL } from "./utils/authUtils";
import "../../styles/styles.css";

const SignInPage = () => {
  return (
    <div
      className="flex justify-center px-4 py-4 bg-custom-green text-custom-black 
    fixed top-0 bottom-0 left-0 right-0"
    >
      <div className="flex flex-col items-center justify-center mobile:w-11/12 max-w-[340px]">
        <LogoImg aria-label="Fresh 2 You" className="mb-3 mobile:w-3/5 mobile:max-w-40" />
        <SignInForm />
        <div className="my-6">
          <p className="inline font-bold text-custom-span">아직 계정이 없으신가요? </p>
          <Link to="../signup/terms" className="sign-up-link">
            가입하기
          </Link>
        </div>
        <hr className="border-gray-200 w-full" />
        <button onClick={() => (window.location.href = KAKAO_AUTH_URL)} className="kakao-btn custom-focus w-full">
          <KakaoIcon className="w-6 h-6" />
          <span>카카오로 시작하기</span>
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
