import IconCommunity from '../../assets/icons/icon-community.svg';
import IconProduct from '../../assets/icons/icon-product.svg';
import IconHome from '../../assets/icons/icon-home.svg';
import IconChat from '../../assets/icons/icon-chat.svg';
import IconAccount from '../../assets/icons/icon-account.svg';
import Menu from './components/Menu';

const FooterNavBar = () => {
  const menus = [
    { name: '커뮤니티', to: '/community', iconComponent: <IconCommunity /> },
    { name: '모든 상품', to: '/product', iconComponent: <IconProduct /> },
    { name: '홈', to: '/', iconComponent: <IconHome /> },
    { name: '채팅', to: '/chatting', iconComponent: <IconChat /> },
    { name: '마이페이지', to: '/mypage', iconComponent: <IconAccount /> },
  ];

  return (
    <footer className="w-full h-[72px] grid grid-cols-5 border-t shrink-0 border-black">
      {menus.map(({ name, to, iconComponent }, idx) => (
        <Menu key={idx} to={to} iconComponent={iconComponent} name={name} />
      ))}
    </footer>
  );
};

export default FooterNavBar;
