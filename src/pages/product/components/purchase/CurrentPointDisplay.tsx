import { Link } from "react-router-dom";
import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";

const CurrentPointDisplay = () => {
  const { userInfo } = useMyPageLogics();
  return (
    <div className="mt-5 text-center text-custom-sm-p">
      <span className="font-semibold text-custom-green">현재 포인트: {userInfo?.point}</span>
      <Link className="ml-3 font-semibold underline text-custom-gray-dark hover:text-custom-green" to="/mypage/charge">
        포인트 충전하러가기
      </Link>
    </div>
  );
};

export default CurrentPointDisplay;
