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
      className="flex items-center w-full h-auto gap-4 px-6 py-4 font-medium bg-white border-t-0 border-b rounded-none border-x-0 border-custom-gray-light hover:bg-custom-green-300 hover:text-white"
    >
      <div className="flex items-center justify-center h-6 aspect-square">{menu.iconComponent}</div>

      {menu.name}
    </button>
  );
};

export default MenuButton;
