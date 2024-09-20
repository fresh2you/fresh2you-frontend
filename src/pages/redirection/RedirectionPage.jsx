import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoImg from "../../assets/img/circle-logo.png";
const RedirectionPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  //       // 회원 여부에 따라 페이지를 리다이렉트
  //       if (isMember) {
  //         navigate('/'); // 이미 회원인 경우 홈페이지로 이동
  //       } else {
  //         navigate('/login/kakao', { state: { email } }); // 회원이 아닌 경우 카카오 리다이렉션 페이지로 이동
  //       }

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <p className="mb-14 font-semibold text-custom-black mobile:text-lg tablet-sm:text-xl tablet-sm:mb-20">
        잠시만 기다려주세요
      </p>
      {isLoading ? <img src={logoImg} alt="Fresh 2 You" className="animate-bounce mobile:w-28 tablet-sm:w-36" /> : null}
    </div>
  );
};

export default RedirectionPage;
