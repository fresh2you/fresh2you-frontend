import usePointPagelogics from "@/pages/mypage/charge/hooks/usePointPagelogics";
import { pageLayoutHeaderProps } from "@/stores/mypage";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";

const PointPage = () => {
  const [inputValue, setInputValue] = useState<number | "">("");
  const { patchUserPoint } = usePointPagelogics();

  const onChangePoint = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setInputValue(value === "" ? "" : Number(value));
  };

  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);

  useEffect(() => {
    setHeaderProps({
      title: "포인트 충전",
      hasConfirm: false,
      backRoute: "/mypage",
    });
  }, [setHeaderProps]);

  return (
    <div className="flex flex-col items-center w-full h-full tablet:pb-[4.5rem] max-w-2xl">
      <div className="flex flex-col justify-center w-full h-full gap-3">
        <div className="text-lg font-bold ">충전하실 포인트를 입력해주세요</div>

        <div className="flex w-full gap-4">
          <input
            className="flex-grow w-auto p-2 border rounded-lg outline-none border-custom-gray-light placeholder:text-custom-gray-light focus:border-custom-gray-dark"
            type="number"
            value={inputValue}
            placeholder="충전할 포인트 입력"
            onChange={onChangePoint}
            pattern="\d*"
            inputMode="numeric"
          />

          <button className="p-2 text-white rounded-lg bg-custom-gray-dark" onClick={() => setInputValue("")}>
            초기화
          </button>
        </div>

        <div className="flex flex-wrap items-center w-full gap-2">
          {[1000, 2000, 5000, 10000, 50000].map((num) => (
            <button
              className="p-2 rounded-lg bg-custom-gray-light"
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
        className="w-3/4 p-2 font-bold text-white rounded-lg bg-custom-green"
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
