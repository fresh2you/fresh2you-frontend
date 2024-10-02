import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";
import { Link } from "react-router-dom";
import IconAccount from "@/assets/icons/icon-account.svg";

const HeaderUserInfo = () => {
  const { userInfo } = useMyPageLogics();

  const bgAvatarStyle = userInfo?.profileImage ? { backgroundImage: `url(${userInfo?.profileImage})` } : {};

  return (
    <Link
      to={"/mypage"}
      className={`items-center justify-center hidden w-7 h-7 bg-custom-gray-light bg-center bg-no-repeat bg-cover rounded-full border-custom-gray-dark aspect-square tablet:flex ${
        !userInfo?.profileImage && "border-none"
      }`}
      style={bgAvatarStyle}
    >
      {!userInfo?.profileImage && <IconAccount className="text-custom-gray-dark" />}
    </Link>
  );
};

export default HeaderUserInfo;
