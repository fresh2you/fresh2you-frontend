import { useNavigate } from "react-router-dom";
import useKakaoLogin from "../signIn/hooks/useKakaoLogin";
import { Loading } from "./component/Loading";

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
      <Loading />
    </>
  );
};

export default RedirectionPage;
