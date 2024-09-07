import logo from '../../assets/img/logo.png';
import SignInForm from './components/SignInForm';
import kakao from '../../assets/img/kakaotalk.png';
import { Link } from 'react-router-dom';
import '../../styles/styles.css';
import { KAKAO_AUTH_URL } from './utils/authUtils';
export default function SignInPage() {
  return (
    <div className="bg-custom-green min-h-screen">
      <div className="flex flex-col items-center w-7/12 my-0 mx-auto p-16">
        <img src={logo} alt="Fresh 2 You" style={{ minWidth: '200px', minHeight: '200px' }} />
        <SignInForm />
        <div className="my-6 whitespace-nowrap">
          <p className="text-base my-6 font-bold whitespace-nowrap inline">아직 계정이 없으신가요? </p>
          <Link
            to="../signup/info"
            className="ml-2 text-base underline underline-offset-4 outline-none"
            style={{ color: 'white' }}
          >
            가입하기
          </Link>
        </div>
        <hr className="w-72 rounded-full text-custom-gray-light" />
        <button
          onClick={() => (window.location.href = KAKAO_AUTH_URL)}
          style={{
            outline: 'none',
            borderColor: 'transparent',
            color: '#333333',
          }}
          className="kakao-button w-72 h-12 flex items-center justify-center space-x-2 mt-6 rounded-full kakao-button font-semibold"
        >
          <img src={kakao} alt="카카오톡" width="25px" />
          <span>카카오로 시작하기</span>
        </button>
      </div>
    </div>
  );
}
