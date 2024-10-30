import { useLocation } from "react-router-dom";
import { mockProducts } from "../../mockData/MockData";
import { formatCurrency } from "@/utils/commonUtils";
import HomeButton from "@/components/HomeButton";
import { useNavigate } from "react-router-dom";
import { pageLayoutHeaderProps } from "@/stores/mypage";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
const fallbackImg = "https://i.postimg.cc/SK4GnMjT/fallback.png";

const PaymentCompletePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity } = location.state || {};
  if (!product) navigate("/");
  const totalAmount = product.price * quantity;

  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);

  useEffect(() => {
    setHeaderProps({
      title: "",
      hasConfirm: false,
      backRoute: "../",
    });
  }, [setHeaderProps]);

  return (
    <div className="flex flex-col items-center w-full min-h-screen text-custom-black">
      <div className="flex flex-col items-center w-full pt-2">
        <h1 className="mb-6 font-bold text-center text-custom-h1 text-custom-green">결제가 완료되었어요!</h1>
        <div
          className="flex flex-col items-center gap-4 rounded-md
         bg-neutral-100 mobile:w-3/5 max-w-[300px] py-2 px-4"
        >
          <img
            src={product.img || fallbackImg}
            alt={product.name}
            className="object-contain border mobile:w-4/5 tablet-sm:max-w-[190px] rounded-md"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-custom-h3">{product.name}</h1>
            <p className="text-custom-gray-dark text-custom-p">{product.seller}</p>
            <p className="text-custom-p">수량: {quantity}</p>
            <p className="font-semibold text-custom-green text-custom-p">총 금액: {formatCurrency(totalAmount)} 원</p>
          </div>
        </div>
        <HomeButton className="mt-5 text-white transition bg-custom-green hover:bg-custom-green-hover" />
      </div>
    </div>
  );
};

export default PaymentCompletePage;
