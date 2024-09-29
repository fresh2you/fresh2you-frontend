import useVerifySellerPageLogics from "@/pages/mypage/verifySeller/hooks/useVerifySellerPageLogics";
import { myPageHeaderProps } from "@/stores/mypage";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

const VerifySellerPage = () => {
  const setHeaderProps = useSetAtom(myPageHeaderProps);
  const { formData, onKeyDownCheckNumber, onClickPhoneConfirm, onChangeFormData, onSubmit } =
    useVerifySellerPageLogics();

  useEffect(() => {
    setHeaderProps({
      title: "판매자 인증",
      hasConfirm: false,
    });
  }, [setHeaderProps]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg font-bold">
            이름
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={onChangeFormData}
            className="px-3 py-2 border border-black rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="name" className="block mb-2 text-lg font-bold">
            전화번호
          </label>
          <input
            id="phone"
            type="number"
            value={formData.phone}
            placeholder="- 없이 입력해주세요"
            onChange={onChangeFormData}
            onKeyDown={onKeyDownCheckNumber}
            className="px-3 py-2 border border-black rounded-lg"
          />
          <button
            type="button"
            className="p-2 ml-3 font-semibold text-white bg-custom-gray-dark"
            onClick={onClickPhoneConfirm}
          >
            인증요청
          </button>
        </div>

        <div>
          <label htmlFor="name" className="block mb-2 text-lg font-bold">
            인증코드
          </label>
          <input
            id="code"
            type="number"
            maxLength={6}
            value={formData.code}
            onChange={onChangeFormData}
            onKeyDown={onKeyDownCheckNumber}
            className="px-3 py-2 border border-black rounded-lg"
          />
          <button type="submit" className="p-2 ml-3 font-semibold text-white bg-custom-green">
            인증완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifySellerPage;
