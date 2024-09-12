import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";

const MyPageUserInfo = ({ role }: { role: "buyer" | "seller" }) => {
  const { moveToPath, userInfo } = useMyPageLogics();

  return (
    <section className="flex flex-col w-full gap-4">
      <article className="flex items-center w-full gap-2 px-4 py-3 bg-custom-gray-light">
        <div
          className="flex items-center justify-center h-20 bg-center bg-no-repeat bg-cover rounded-full aspect-square bg-custom-gray-dark"
          style={userInfo?.image ? { backgroundImage: `url(${userInfo?.image})` } : {}}
        />

        <div>
          <div className="text-lg font-semibold">{userInfo?.nickname}</div>
          <div className="text-sm font-normal">{userInfo?.email}</div>
        </div>

        <button
          className="px-1 py-2 ml-auto text-sm font-semibold"
          onClick={() => moveToPath("/mypage/profile")}
        >
          프로필 수정
        </button>
      </article>

      {role && (
        <>
          {role === "buyer" ? (
            <button
              className="flex items-center justify-center w-auto h-auto px-3 py-2 ml-4 font-semibold text-white rounded-lg max-w-36 max-h-10 bg-custom-green-300"
              onClick={() => moveToPath("/mypage/verify-seller")}
            >
              판매자 인증하기
            </button>
          ) : (
            <div className="flex items-center justify-center w-auto h-auto px-3 py-2 ml-4 font-semibold text-white rounded-lg max-w-36 max-h-10 bg-custom-verify">
              판매자 인증완료
            </div>
          )}{" "}
        </>
      )}
    </section>
  );
};

export default MyPageUserInfo;
