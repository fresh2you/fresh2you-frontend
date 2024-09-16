import MyPageHeader from "@/pages/mypage/mypage/components/MyPageHeader";
import MyPageUserInfo from "@/pages/mypage/mypage/components/MyPageUserInfo";
import MyPageUserMenu from "@/pages/mypage/mypage/components/MyPageUserMenu";
import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";

const MyPage = () => {
  // 임시용
  const { userInfo } = useMyPageLogics();

  return (
    <div className="flex flex-col w-full h-full gap-6 overflow-y-hidden">
      {userInfo ? (
        <>
          <MyPageHeader />

          {/* UserInfo */}
          <MyPageUserInfo role={userInfo.role} />

          {/* Menu */}
          <MyPageUserMenu role={userInfo.role} />
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full">로그인을 해주세요...</div>
      )}
    </div>
  );
};

export default MyPage;
