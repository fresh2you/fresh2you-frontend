import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";
import IconAccount from "@/assets/icons/icon-account.svg";

const MyPageUserInfo = ({ isSeller }: { isSeller: boolean }) => {
  const { moveToPath, userInfo } = useMyPageLogics();

  return (
    <section className="flex flex-col w-full gap-4">
      <article className="flex items-center w-full gap-2 px-4 py-3">
        <div
          className="flex items-center justify-center w-16 h-16 bg-center bg-no-repeat bg-cover rounded-full aspect-square bg-custom-gray-light"
          style={userInfo?.profileImage ? { backgroundImage: `url(${userInfo?.profileImage})` } : {}}
        >
          {!userInfo?.profileImage && <IconAccount className="w-12 h-12 text-custom-gray-dark" />}
        </div>

        <div>
          <div className="text-lg font-semibold">{userInfo?.nickname}</div>
          <div className="text-sm font-normal">{userInfo?.email}</div>
        </div>

        <button
          className="p-2 ml-auto text-sm font-semibold text-white rounded-lg bg-custom-green"
          onClick={() => moveToPath("/mypage/profile")}
        >
          프로필 수정
        </button>
      </article>

      {isSeller ? (
        <div className="flex items-center justify-center w-auto h-auto px-3 py-2 ml-4 font-semibold text-white rounded-lg max-w-36 max-h-10 bg-custom-verify">
          판매자 인증완료
        </div>
      ) : (
        <button
          className="flex items-center justify-center w-auto h-auto px-3 py-2 ml-4 font-semibold text-white rounded-lg max-w-36 max-h-10 bg-custom-green-300"
          onClick={() => moveToPath("/mypage/verify-seller")}
        >
          판매자 인증하기
        </button>
      )}
    </section>
  );
};

export default MyPageUserInfo;
