import MenuButton from "@/pages/mypage/mypage/components/MenuButton";
import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";

const MyPageUserMenu = ({ role }: { role: "buyer" | "seller" }) => {
  const { commonMenu, sellerMenu } = useMyPageLogics();

  return (
    <section className="w-full pb-4 flex flex-col gap-6 overflow-y-scroll scrollbar-hide">
      {/* 공통 메뉴 */}
      <article className="w-full flex flex-col">
        <header className="px-6 pb-6 border-b border-custom-gray-light text-xl font-bold">
          내 정보
        </header>

        {commonMenu.map((menu) => (
          <MenuButton key={menu.id} menu={menu} />
        ))}
      </article>

      {/* 판매자 전용 메뉴 */}
      {role === "seller" && (
        <article className="w-full flex flex-col">
          <header className="px-6 pb-6 border-b border-custom-gray-light text-xl font-bold">
            나의 물품 관리
          </header>

          {sellerMenu.map((menu) => (
            <MenuButton key={menu.id} menu={menu} />
          ))}
        </article>
      )}
    </section>
  );
};

export default MyPageUserMenu;
