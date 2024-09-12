import MyPageHeader from "@/pages/mypage/mypage/components/MyPageHeader";
import MyPageUserInfo from "@/pages/mypage/mypage/components/MyPageUserInfo";
import MyPageUserMenu from "@/pages/mypage/mypage/components/MyPageUserMenu";
import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";

const MyPage = () => {
  // 임시용
  const { userInfo } = useMyPageLogics();

  return (
    <div className="w-full h-full flex flex-col gap-6 overflow-y-hidden">
      {userInfo && (
        <>
          <MyPageHeader />

          {/* UserInfo */}
          <MyPageUserInfo role={userInfo.role} />

          {/* Menu */}
          <MyPageUserMenu role={userInfo.role} />
        </>
      )}
    </div>
  );
};

export default MyPage;
