import IconSearch from "@/assets/icons/icon-search.svg";
import { Link, useLocation } from "react-router-dom";
import MenuDropDown from "@/components/layout/components/MenuDropDown";
import { headerDropdownMenus } from "@/components/layout/constants/menus";
import HeaderUserInfo from "@/components/layout/components/HeaderUserInfo";

const HeaderRight = () => {
  const { pathname } = useLocation();

  return (
    <div className="items-center hidden h-full gap-2 tablet:flex">
      {pathname !== "/search" && (
        <Link to={"/search"}>
          <IconSearch className="w-6 h-6 text-black" />
        </Link>
      )}

      <HeaderUserInfo />

      <div className="hidden tablet:block desktop:hidden">
        <MenuDropDown options={headerDropdownMenus} />
      </div>
    </div>
  );
};

export default HeaderRight;
