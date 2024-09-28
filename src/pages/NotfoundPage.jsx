import { useNavigate } from "react-router-dom";
import LogoImg from "../assets/img/logo.svg";
import HomeButton from "../components/HomeButton";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-custom-green px-4 text-custom-black">
      <div className="flex items-center justify-center gap-x-4 w-11/12">
        <div className="w-1/3 max-w-[180px]">
          <LogoImg alt="Fresh 2 You" className="rounded-lg h-auto" />
        </div>
        <div className="flex flex-col items-start">
          <h1 className=" text-white text-custom-h font-semibold">404</h1>
          <p className="font-medium text-custom-p">페이지를 찾을 수 없습니다.</p>
        </div>
      </div>
      <HomeButton
        className="mt-1.5 bg-white text-custom-black hover:bg-custom-gray-dark
      transition hover:text-white"
      />
    </div>
  );
};

export default NotFoundPage;
