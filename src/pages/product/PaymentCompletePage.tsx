import { useLocation, useNavigate } from "react-router-dom";
import { formatCurrency } from "@/utils/commonUtils";
import HomeButton from "@/components/HomeButton";
import qs, { ParsedQs } from "qs";
import useHeaderProps from "@/hooks/useHeaderProps";
const fallbackImg = "https://i.postimg.cc/SK4GnMjT/fallback.png";

interface ProductFromQuery {
  productName: string;
  imageUrl: string;
  price: number;
  sellerName: string;
  quantity: number;
}

const PaymentCompletePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { search } = location;
  const parsedQuery = qs.parse(search, { ignoreQueryPrefix: true });

  const productQuery = parsedQuery.product as ParsedQs;

  const product: ProductFromQuery = {
    productName: String(productQuery?.productName),
    imageUrl: String(productQuery?.imageUrl || fallbackImg),
    price: Number(productQuery?.price),
    sellerName: String(productQuery?.sellerName),
    quantity: Number(productQuery?.quantity),
  };
  if (!product) navigate("/");

  useHeaderProps({
    title: "",
    backRoute: "../",
    hasConfirm: false,
    confirmText: null,
    onConfirm: null,
  });

  return (
    <section className="flex flex-col items-center w-full min-h-screen text-custom-black">
      <div className="flex flex-col items-center w-full pt-2">
        <h1 className="mb-6 font-bold text-center text-custom-h2 text-custom-green">결제가 완료되었어요!</h1>
        <div className="flex items-center w-full max-w-[500px] gap-4 p-4 bg-neutral-100 rounded">
          <div className="mobile:w-1/3 tablet:w-full max-w-[141px]">
            <img
              src={product.imageUrl || fallbackImg}
              alt={product.productName}
              className="border rounded-md object-fit aspect-square"
            />
          </div>
          <div className="flex flex-col justify-around tablet-sm:gap-y-0.5">
            <p className="font-bold text-custom-p">{product.productName}</p>
            <p className="text-custom-gray-dark text-custom-p">{product.sellerName}</p>
            <p className="text-custom-p">수량: {product.quantity}</p>
            <p className="font-semibold text-custom-green text-custom-p">
              총 결제금액: {formatCurrency(product.quantity * product.price)} 원
            </p>
          </div>
        </div>
        <HomeButton className="mt-5 text-white transition bg-custom-green hover:bg-custom-green-hover hover:text-white" />
      </div>
    </section>
  );
};

export default PaymentCompletePage;
