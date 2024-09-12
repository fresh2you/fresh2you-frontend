import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";
import IconRight from "icons/arrow-up.svg";

const MyPageHeader = () => {
  const { moveToPath, userInfo } = useMyPageLogics();

  return (
    <header className="w-full f-auto p-6 flex justify-between items-center">
      <h2 className="text-2xl font-bold">마이 페이지</h2>

      <button
        onClick={() => moveToPath("charge")}
        className="p-2 pr-1 flex items-center gap-1 rounded-lg bg-custom-gray-light text-sm text-gray-100 font-semibold"
      >
        포인트: {userInfo ? userInfo?.point.toLocaleString() : 0}
        <div className="h-full flex justify-center items-center rotate-90">
          <IconRight />
        </div>
      </button>
    </header>
  );
};

export default MyPageHeader;
