import { Outlet } from "react-router-dom";
import CommonHeader from "@/components/CommonHeader";

const MyPageLayout = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <CommonHeader />
      <main className="w-full h-full overflow-hidden overflow-y-scroll scrollbar-hide">
        <Outlet />
      </main>
    </div>
  );
};

export default MyPageLayout;
