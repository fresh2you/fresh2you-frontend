import MenuDropDown from "@/components/layout/components/MenuDropDown";
import { headerDropdownMenus } from "@/components/layout/constants/menus";
import HeaderUserInfo from "@/components/layout/components/HeaderUserInfo";
import { useLocation } from "react-router-dom";

const HeaderRight = () => {
  const { pathname } = useLocation();

  return (
    <div className="items-center hidden h-full gap-4 tablet:flex">
      {pathname !== "/mypage" && <HeaderUserInfo />}

      <div className="hidden h-full tablet:block desktop:hidden">
        <MenuDropDown options={headerDropdownMenus} />
      </div>
    </div>
  );
};

export default HeaderRight;
