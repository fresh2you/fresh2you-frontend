import { Outlet, useLocation } from "react-router-dom";
import PageLayoutHeader from "@/components/pageLayout/PageLayoutHeader";

const PageLayout = () => {
  const location = useLocation();
  const isChattingPage = location.pathname.startsWith("/chatting/");

  return (
    <div className="flex flex-col w-full h-full">
      <PageLayoutHeader />
      <main
        className={`flex justify-center w-full h-full overflow-hidden overflow-y-scroll scrollbar-hide
        ${isChattingPage ? "" : "px-4"} desktop:px-10`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
