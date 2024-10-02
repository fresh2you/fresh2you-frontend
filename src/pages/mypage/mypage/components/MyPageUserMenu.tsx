import MenuButton from "@/pages/mypage/mypage/components/MenuButton";
import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";

const MyPageUserMenu = ({ isSeller }: { isSeller: boolean }) => {
  const { commonMenu, sellerMenu } = useMyPageLogics();

  return (
    <section className="flex flex-col w-full gap-6 py-4">
      {/* 공통 메뉴 */}
      <article className="flex flex-col w-full">
        <header className="p-4 text-xl font-bold border-b border-custom-gray-light">내 정보</header>

        {commonMenu.map((menu) => (
          <MenuButton key={menu.id} menu={menu} />
        ))}
      </article>

      {/* 판매자 전용 메뉴 */}
      {isSeller && (
        <article className="flex flex-col w-full">
          <header className="p-4 text-xl font-bold border-b border-custom-gray-light">나의 물품 관리</header>

          {sellerMenu.map((menu) => (
            <MenuButton key={menu.id} menu={menu} />
          ))}
        </article>
      )}
    </section>
  );
};

export default MyPageUserMenu;
