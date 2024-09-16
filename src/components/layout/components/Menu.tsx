import { Link, useLocation } from "react-router-dom";

interface MenuProps {
  to: string;
  iconComponent: JSX.Element;
  name: string;
}

const Menu = ({ to, iconComponent, name }: MenuProps) => {
  const { pathname } = useLocation();

  /* TDOD: 메뉴 아이콘 활성화 색상 나중에 디자인 시스템으로 변경 */
  return (
    <Link
      to={to}
      className={`flex flex-col justify-center items-center font-semibold text-black hover:text-custom-green-300 ${
        pathname === to && "text-custom-green"
      }`}
    >
      {iconComponent}
      {name}
    </Link>
  );
};

export default Menu;
