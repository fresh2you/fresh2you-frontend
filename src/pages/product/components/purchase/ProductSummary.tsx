import { formatCurrency } from "@/utils/commonUtils";
import "../../../../styles/styles.css";
import QuantitySelector from "./QuantitySelector";
const fallbackImg = "https://i.postimg.cc/SK4GnMjT/fallback.png";

interface ProductSummaryProps {
  product: IProductList;
}

const ProductSummary: React.FC<ProductSummaryProps> = ({ product }) => {
  return (
    <section className="flex flex-col w-full gap-4 tablet:flex-row tablet:justify-between">
      <div className="flex items-center gap-3">
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
          <p className="font-semibold text-custom-green text-custom-p">{formatCurrency(product.price)} 원</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="quantity" className="font-semibold text-custom-input whitespace-nowrap">
          수량
        </label>
        <QuantitySelector />
      </div>
    </section>
  );
};

export default ProductSummary;
