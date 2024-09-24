import { headerMainMenus } from "@/components/layout/constants/menus";
import { Link } from "react-router-dom";

const HeaderCenterMenus = () => {
  return (
    <ul className="items-center hidden w-full h-full gap-8  shrink desktop:flex">
      {headerMainMenus.map((menu, idx) => (
        <li key={idx} className="flex items-center h-full">
          <Link
            to={menu.to}
            className="flex items-center p-2 text-base font-medium text-black bg-white hover:text-custom-green-300"
          >
            {menu.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderCenterMenus;
