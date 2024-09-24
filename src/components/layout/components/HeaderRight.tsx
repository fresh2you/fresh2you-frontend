import MenuDropDown from "@/components/layout/components/MenuDropDown";
import { headerDropdownMenus } from "@/components/layout/constants/menus";
import HeaderUserInfo from "@/components/layout/components/HeaderUserInfo";

const HeaderRight = () => {
  return (
    <div className="items-center hidden h-full gap-4 tablet:flex">
      <HeaderUserInfo />

      <div className="hidden tablet:block desktop:hidden">
        <MenuDropDown options={headerDropdownMenus} />
      </div>
    </div>
  );
};

export default HeaderRight;
