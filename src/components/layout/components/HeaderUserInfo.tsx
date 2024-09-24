import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";
import { Link } from "react-router-dom";
import IconAccount from "@/assets/icons/icon-account.svg";

const HeaderUserInfo = () => {
  const { userInfo } = useMyPageLogics();

  const bGAvatarStyle = userInfo?.image ? { backgroundImage: `url(${userInfo?.image})` } : {};

  return (
    <Link
      to={"/mypage"}
      className={`items-center justify-center hidden w-6 h-6 bg-custom-gray-light bg-center bg-no-repeat bg-cover rounded-full border-custom-gray-dark aspect-square tablet:flex ${
        !userInfo?.image && "border"
      }`}
      style={bGAvatarStyle}
    >
      {!userInfo?.image && <IconAccount className="text-custom-gray-dark" />}
    </Link>
  );
};

export default HeaderUserInfo;
