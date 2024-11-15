import { Outlet, useLocation } from "react-router-dom";
import PageLayoutHeader from "@/components/pageLayout/PageLayoutHeader";

const PageLayout = () => {
  const location = useLocation();
  const isChattingPage = location.pathname.startsWith("/chatting/");
  const isPurchasePage = location.pathname.startsWith("/purchase/");

  return (
    <div className={`flex flex-col w-full ${isPurchasePage ? "" : "h-full"}`}>
      <PageLayoutHeader />
      <div
        className={`flex justify-center w-full h-full overflow-hidden scrollbar-hide
        ${isChattingPage ? "" : "px-4"} desktop:px-10`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
