import IconCommunity from "@/assets/icons/icon-community.svg";
import IconProduct from "@/assets/icons/icon-product.svg";
import IconHome from "@/assets/icons/icon-home.svg";
import IconChat from "@/assets/icons/icon-chat.svg";
import IconAccount from "@/assets/icons/icon-account.svg";

interface HeaderMenusTypes {
  name: string;
  to?: string;
  iconRemove?: true;
  onClick?: () => void;
}

export const footerMenus = [
  { name: "커뮤니티", to: "/community", iconComponent: <IconCommunity className="w-8 h-8 aspect-square" /> },
  { name: "모든 상품", to: "/product", iconComponent: <IconProduct className="w-8 h-8 aspect-square" /> },
  { name: "홈", to: "/", iconComponent: <IconHome className="w-8 h-8 aspect-square" /> },
  { name: "채팅", to: "/chatting", iconComponent: <IconChat className="w-8 h-8 aspect-square" /> },
  { name: "마이페이지", to: "/mypage", iconComponent: <IconAccount className="w-8 h-8 aspect-square" /> },
];

export const headerMainMenus: { name: string; to: string }[] = [
  { name: "모든 상품", to: "/product" },
  { name: "커뮤니티", to: "/community" },
  { name: "채팅", to: "/chatting" },
];

export const headerDropdownMenus: HeaderMenusTypes[] = [
  ...headerMainMenus,
  { name: "마이페이지", to: "/mypage" },
  { name: "로그아웃", onClick: () => console.log("로그아웃"), iconRemove: true },
];
