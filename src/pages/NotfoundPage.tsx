import LogoImg from "../assets/img/logo.svg";
import HomeButton from "@/components/HomeButton";

const NotFoundPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-4 bg-custom-green text-custom-black">
      <section className="flex items-center justify-center w-11/12 gap-x-4">
        <div className="w-1/3 max-w-[180px]">
          <LogoImg alt="Fresh 2 You" className="h-auto" />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="font-semibold text-white text-custom-h">404</h1>
          <p className="font-semibold text-custom-p">페이지를 찾을 수 없습니다.</p>
        </div>
      </section>
      <HomeButton className="mt-1.5 bg-white text-custom-black hover:bg-custom-gray-light hover:text-custom-black" />
    </main>
  );
};

export default NotFoundPage;
