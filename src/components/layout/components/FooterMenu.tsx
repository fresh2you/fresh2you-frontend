import { Link, useLocation } from "react-router-dom";

interface FooterMenuProps {
  to: string;
  iconComponent: JSX.Element;
  name: string;
}

const FooterMenu = ({ to, iconComponent, name }: FooterMenuProps) => {
  const { pathname } = useLocation();

  /* TDOD: 메뉴 아이콘 활성화 색상 나중에 디자인 시스템으로 변경 */
  return (
    <Link
      to={to}
      className={`flex flex-col justify-center items-center text-sm hover:text-custom-green-300 ${
        pathname === to ? "text-custom-green" : "text-custom-gray-dark"
      }`}
    >
      {iconComponent}
      {name}
    </Link>
  );
};

export default FooterMenu;
