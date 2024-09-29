import { footerMenus } from "@/components/layout/constants/menus";
import FooterMenu from "./components/FooterMenu";

const FooterNavBar = () => {
  return (
    <footer
      className={`tablet:hidden z-50 fixed bottom-0 w-full bg-white h-[72px] grid grid-cols-5 border-t shrink-0 border-custom-gray-light`}
    >
      {footerMenus.map(({ name, to, iconComponent }, idx) => (
        <FooterMenu key={idx} to={to} iconComponent={iconComponent} name={name} />
      ))}
    </footer>
  );
};

export default FooterNavBar;
