import { useNavigate } from "react-router-dom";
import logoImg from "../assets/img/logo.png";
import HomeButton from "../components/HomeButton";
const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-custom-green px-4 text-custom-black">
      <div className="flex items-center justify-center gap-x-4">
        <img src={logoImg} alt="Fresh 2 You" className="rounded-lg mobile:w-24 tablet-sm:w-36 desktop-sm:w-40" />
        <div className="flex flex-col items-start">
          <h1 className=" text-white mobile:text-4xl tablet-sm:text-5xl desktop-sm:text-6xl">404</h1>
          <p className="font-medium mobile:text-base tablet-sm:text-lg desktop-sm:text-lg">
            페이지를 찾을 수 없습니다.
          </p>
        </div>
      </div>
      <HomeButton className="mt-4 bg-white text-custom-black hover:bg-custom-green-hover transition hover:text-white" />
    </div>
  );
};

export default NotFoundPage;
