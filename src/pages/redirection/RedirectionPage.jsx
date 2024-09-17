import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoImg from "../../assets/img/logo.png";
const RedirectionPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // URL에서 authorization code나 필요한 데이터를 추출
    const queryParams = new URLSearchParams(window.location.search);
    const authorizationCode = queryParams.get("code");

    if (authorizationCode) {
      // 백엔드로 authorization code를 보내서 유저 정보를 받아옴
      //   axios
      //     .post('', { code: authorizationCode })
      //     .then((response) => {
      //       const { isMember, email } = response.data;
      //       // 회원 여부에 따라 페이지를 리다이렉트
      //       if (isMember) {
      //         navigate('/'); // 이미 회원인 경우 홈페이지로 이동
      //       } else {
      //         navigate('/signup/info', { state: { email } }); // 회원이 아닌 경우 회원가입 페이지로 이동하며 이메일 전달
      //       }
      //     })
      //     .catch((error) => {
      //       console.error('Error fetching user data:', error);
      //     })
      //     .finally(() => {
      //       setIsLoading(false); // 로딩 상태 업데이트
      //     });
    }
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading ? <img src={logoImg} alt="Fresh 2 You" className="animate-bounce rounded-md w-32" /> : null}
    </div>
  );
};

export default RedirectionPage;
