import { Outlet } from "react-router-dom";
import Header from "./Header";
import FooterNavBar from "./FooterNavBar";

const RootLayout = () => {
  return (
    <div className="relative z-0 flex flex-col justify-between w-full h-full">
      <Header />

      <main className="pb-[72px] tablet:pb-0 z-20 w-full h-full overflow-y-scroll tablet:px-4 desktop:px-8 ">
        <Outlet />
      </main>

      <FooterNavBar />
    </div>
  );
};

export default RootLayout;
