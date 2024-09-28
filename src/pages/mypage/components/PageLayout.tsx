import { Outlet } from "react-router-dom";
import CommonHeader from "@/components/CommonHeader";

const PageLayout = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <CommonHeader />
      <main className="flex justify-center w-full h-full overflow-hidden overflow-y-scroll scrollbar-hide mobile:px-4 desktop:px-10 max-w-7xl">
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
