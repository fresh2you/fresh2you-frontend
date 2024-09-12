import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";

const MyPageUserInfo = ({ role }: { role: "buyer" | "seller" }) => {
  const { moveToPath, userInfo } = useMyPageLogics();

  return (
    <section className="w-full flex flex-col gap-4">
      <article className="w-full px-4 py-3 flex items-center gap-2 bg-custom-gray-light">
        <div
          className="h-20 aspect-square flex justify-center items-center rounded-full bg-custom-gray-dark bg-center bg-no-repeat bg-cover"
          style={userInfo?.image ? { backgroundImage: `url(${userInfo?.image})` } : {}}
        />

        <div className="text-black">
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
              className="w-auto max-w-36 h-auto max-h-10 ml-4 px-3 py-2 rounded-lg flex items-center justify-center bg-custom-green-300 text-white font-semibold"
              onClick={() => moveToPath("/mypage/verify-seller")}
            >
              판매자 인증하기
            </button>
          ) : (
            <div className="w-auto max-w-36 h-auto max-h-10 ml-4 px-3 py-2 rounded-lg flex items-center justify-center bg-custom-verify text-white font-semibold">
              판매자 인증완료
            </div>
          )}{" "}
        </>
      )}
    </section>
  );
};

export default MyPageUserInfo;
