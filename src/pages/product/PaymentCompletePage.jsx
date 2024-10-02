import { useLocation } from "react-router-dom";
import { mockProducts } from "../../mockdata/MockData";
import { formatCurrency } from "@/utils/commonUtils";
import HomeButton from "@/components/HomeButton";
import { useNavigate } from "react-router-dom";
const fallbackImg = "https://i.postimg.cc/SK4GnMjT/fallback.png";

const PaymentCompletePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity } = location.state || {};
  if (!product) navigate("/");
  const totalAmount = product.price * quantity;

  return (
    <div className="flex flex-col items-center min-h-screen text-custom-black w-full">
      <div className="w-full flex flex-col items-center pt-2">
        <h1 className="text-custom-h2 font-bold mb-6 text-center text-custom-green">결제가 완료되었어요!</h1>
        <div
          className="flex flex-col items-center gap-4 rounded-md
         bg-neutral-100 mobile:w-3/5 max-w-[300px] py-2 px-4"
        >
          <img
            src={product.imageUrl || fallbackImg}
            alt={product.name}
            className="object-contain border mobile:w-4/5 tablet-sm:max-w-[190px] rounded-md"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-custom-h3 font-bold">{product.name}</h1>
            <p className="text-custom-gray-dark text-custom-p">{product.seller}</p>
            <p className="text-custom-p">수량: {quantity}</p>
            <p className="text-custom-green font-semibold text-custom-p">총 금액: {formatCurrency(totalAmount)} 원</p>
          </div>
        </div>
        <HomeButton className="mt-5 bg-custom-green hover:bg-custom-green-hover transition text-white" />
      </div>
    </div>
  );
};

export default PaymentCompletePage;
