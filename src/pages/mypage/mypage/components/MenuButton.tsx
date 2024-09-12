import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";

interface MenuProps {
  menu: {
    name: string;
    path: string | null;
    iconComponent: JSX.Element;
    onClick?: () => void;
  };
}

const MenuButton = ({ menu }: MenuProps) => {
  const { moveToPath } = useMyPageLogics();

  return (
    <button
      onClick={() => {
        // 기본적인 이동 로직
        if (menu.path) moveToPath(menu.path);
        // 추가 로직필요한 경우
        if (menu.onClick) menu.onClick();
      }}
      className="w-full h-auto px-6 py-4 flex items-center gap-4 border-x-0 border-t-0 border-b border-custom-gray-light rounded-none font-medium bg-white"
    >
      <div className="h-6 aspect-square flex justify-center items-center">{menu.iconComponent}</div>

      {menu.name}
    </button>
  );
};

export default MenuButton;
