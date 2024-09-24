import TextLogo from "@/assets/img/logo-text.svg";
import { Link, useLocation } from "react-router-dom";
import HeaderInput from "./components/HeaderInput";
import HeaderRight from "@/components/layout/components/HeaderRight";
import HeaderCenterMenus from "@/components/layout/components/HeaderCenterMenus";
import IconSearch from "@/assets/icons/icon-search.svg";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="flex items-center justify-between w-full gap-2 px-4 py-1 border-gray-300 h-14 tablet-sm:px-4 tablet-sm:gap-4 ">
      <h1 className="flex items-center h-4/5 tablet:h-full">
        <Link to={"/"} className="h-full">
          <TextLogo className="w-auto h-full aspect-auto text-custom-green" />
          <span className="a11y-hidden">1</span>
        </Link>
      </h1>

      {/* desktop 이상일 경우에만 렌더링 */}
      <HeaderCenterMenus />

      {pathname === "/search" ? (
        <HeaderInput />
      ) : (
        <Link to={"/search"} className="ml-auto">
          <IconSearch className="w-6 h-6 text-black" />
        </Link>
      )}

      <HeaderRight />
    </header>
  );
};

export default Header;
