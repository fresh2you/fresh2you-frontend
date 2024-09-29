import { useLocation } from "react-router-dom";
import { mockProducts } from "../../mockdata/MockData";
import { formatCurrency } from "@/utils/commonUtils";
import HomeButton from "@/components/HomeButton";

const PaymentCompletePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("productId");
  const quantity = queryParams.get("quantity");

  const product = mockProducts.products.find((p) => p.product_id === parseInt(productId));

  if (!product) return <div>상품 정보를 불러올 수 없습니다.</div>;

  const totalAmount = product.price * quantity;

  return (
    <div className="flex flex-col items-center min-h-screen text-custom-black px-4 md:px-8 lg:px-20">
      <div className="w-full max-w-4xl py-12 md:py-16 lg:py-20 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-10 text-center text-custom-green">
          결제가 완료되었어요!
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 rounded bg-neutral-100 py-4 md:py-8 px-6 md:px-8 lg:px-12">
          <img
            src={product.img}
            alt={product.name}
            className="object-contain w-32 h-32 md:w-40 md:h-40 border rounded-sm"
          />
          <div className="flex flex-col ml-0 md:ml-4 gap-1">
            <h1 className="text-lg md:text-xl font-bold">{product.name}</h1>
            <p className="text-lg md:text-xl">{product.seller}</p>
            <p className="text-lg md:text-xl">수량: {quantity}</p>
            <p className="text-xl md:text-2xl font-semibold">총금액: {formatCurrency(totalAmount)} 원</p>
          </div>
        </div>
        <HomeButton className="mt-6 md:mt-8 bg-custom-green hover:bg-custom-green-hover transition text-white" />
      </div>
    </div>
  );
};

export default PaymentCompletePage;
