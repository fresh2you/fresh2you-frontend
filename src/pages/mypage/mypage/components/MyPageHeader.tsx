import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";
import IconRight from "icons/arrow-up.svg";

const MyPageHeader = () => {
  const { moveToPath, userInfo } = useMyPageLogics();

  return (
    <header className="flex items-center justify-between w-full p-6 pb-0 f-auto">
      <h2 className="text-2xl font-bold">마이 페이지</h2>

      <button
        onClick={() => moveToPath("charge")}
        className="flex items-center gap-1 p-2 pl-3 pr-2 text-sm font-semibold bg-white rounded-lg border-custom-gray-light"
      >
        포인트: {userInfo ? userInfo?.point.toLocaleString() : 0}
        <div className="flex items-center justify-center h-full rotate-90 ">
          <IconRight />
        </div>
      </button>
    </header>
  );
};

export default MyPageHeader;
