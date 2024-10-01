import { useNavigate } from "react-router-dom";
import useKakaoLogin from "../signIn/hooks/useKakaoLogin";
import { Loading } from "./component/Loading";
const RedirectionPage = () => {
  const navigate = useNavigate();

  const onSuccessCallback = (data) => {
    if (data.isSignup) {
      navigate("/");
    } else {
      sessionStorage.setItem(
        "socialInfo",
        JSON.stringify({
          email: data.loginMember.email,
          nickname: data.loginMember.nickname,
          provider: data.loginMember.provider,
          providerId: data.loginMember.providerId,
        }),
      );

      navigate("/auth/signup/terms");
    }
  };

  const onErrorCallback = (error) => {
    navigate("/auth/signin");
  };

  useKakaoLogin(onSuccessCallback, onErrorCallback);

  return (
    <>
      <Loading isLayoutApplied={false} />
    </>
  );
};

export default RedirectionPage;
