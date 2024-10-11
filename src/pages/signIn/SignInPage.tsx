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
      <main className="flex flex-col items-center justify-center mobile:w-11/12 max-w-[340px]">
        <header className="w-full">
          <LogoImg aria-label="Fresh 2 You" className="mb-3 mobile:w-3/5 mobile:max-w-40 mx-auto" />
        </header>
        <SignInForm />
        <section className="my-6 mx-auto">
          <p className="inline font-bold text-custom-span">아직 계정이 없으신가요? </p>
          <Link to="../signup/terms" className="sign-up-link">
            가입하기
          </Link>
        </section>
        <hr className="border-gray-200 w-full" />
        <section aria-labelledby="social-login" className="w-full">
          <h2 id="social-login" className="sr-only">
            소셜 로그인
          </h2>
          <button
            onClick={() => (window.location.href = KAKAO_AUTH_URL)}
            className="kakao-btn custom-focus w-full"
            aria-label="카카오톡으로 로그인하기"
          >
            <KakaoIcon className="w-6 h-6" />
            <span>카카오로 시작하기</span>
          </button>
        </section>
      </main>
    </div>
  );
};

export default SignInPage;
