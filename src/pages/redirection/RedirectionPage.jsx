import { useNavigate } from "react-router-dom";
import useKakaoLogin from "../signIn/hooks/useKakaoLogin";
import logoImg from "../../assets/img/circle-logo.png";
const RedirectionPage = () => {
  const navigate = useNavigate();

  const onSuccessCallback = (data) => {
    if (data.isSignup) {
      navigate("/");
    } else {
      navigate("/auth/signup/terms", {
        state: { email: data.email, provider: data.provider, providerId: data.providerId, tempToken: data.tempToken },
      });
    }
  };

  const onErrorCallback = (error) => {
    navigate("/auth/signin");
  };

  useKakaoLogin(onSuccessCallback, onErrorCallback);

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <img alt="Fresh 2 You" src={logoImg} className="animate-bounce w-1/3 max-w-36" />
      </div>
    </>
  );
};

export default RedirectionPage;
