import CommonHeader from "@/components/CommonHeader";
import usePointPagelogics from "@/pages/mypage/charge/hooks/usePointPagelogics";
import { useState } from "react";

const PointPage = () => {
  const [inputValue, setInputValue] = useState<number | "">("");
  const { patchUserPoint } = usePointPagelogics();

  const onChangePoint = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setInputValue(value === "" ? "" : Number(value));
  };

  return (
    <div className="flex flex-col items-center justify-between w-full h-full pb-20">
      <CommonHeader title={"포인트 충전하기"} onBack={() => {}} hasConfirm={false} />

      <div className="flex flex-col w-full px-[10%] gap-3">
        <div className="text-lg font-bold ">충전하실 포인트를 입력해주세요</div>

        <div className="flex w-full gap-4">
          <input
            className="flex-grow w-auto p-2 border rounded-lg outline-none border-custom-gray-light placeholder:text-custom-gray-light focus:border-custom-gray-dark"
            type="number"
            value={inputValue}
            placeholder="충전할 포인트 입력"
            onChange={onChangePoint}
          />

          <button className="p-2 text-white bg-custom-gray-dark" onClick={() => setInputValue("")}>
            초기화
          </button>
        </div>

        <div className="flex flex-wrap items-center w-full gap-2">
          {[1000, 2000, 5000, 10000, 50000].map((num) => (
            <button
              className="p-2 bg-custom-gray-light"
              key={num}
              onClick={() => {
                setInputValue((inputValue || 0) + num);
              }}
            >
              +{num}
            </button>
          ))}
        </div>
      </div>

      <button
        className="w-3/4 font-bold text-white bg-custom-green"
        onClick={async () => {
          if (inputValue !== "" && inputValue !== 0) await patchUserPoint(inputValue);
          else console.log("0원 이상을 충전하시오");
        }}
      >
        충전하기
      </button>
    </div>
  );
};

export default PointPage;
