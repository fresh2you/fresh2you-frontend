import MyPageHeader from "@/pages/mypage/mypage/components/MyPageHeader";
import MyPageUserInfo from "@/pages/mypage/mypage/components/MyPageUserInfo";
import MyPageUserMenu from "@/pages/mypage/mypage/components/MyPageUserMenu";
import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";

const MyPage = () => {
  // 임시용
  const { userInfo } = useMyPageLogics();

  return (
    <div className="flex flex-col w-full h-full gap-6 overflow-y-scroll scrollbar-hide">
      {userInfo ? (
        <>
          <MyPageHeader />

          <div className="flex flex-col h-full">
            {/* UserInfo */}
            <MyPageUserInfo isSeller={userInfo.isSeller} />

            {/* Menu */}
            <MyPageUserMenu isSeller={userInfo.isSeller} />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full">로그인을 해주세요...</div>
      )}
    </div>
  );
};

export default MyPage;
