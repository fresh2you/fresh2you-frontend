import { formatCurrency } from "@/utils/commonUtils";
import "../../../../styles/styles.css";
import QuantitySelector from "./QuantitySelector";
const fallbackImg = "https://i.postimg.cc/SK4GnMjT/fallback.png";

interface ProductSummaryProps {
  product: IProductList;
}

const ProductSummary: React.FC<ProductSummaryProps> = ({ product }) => {
  return (
    <section className="flex flex-col w-full tablet:flex-row tablet:justify-between gap-4">
      <div className="flex gap-3 items-center">
        <div className="mobile:w-1/3 tablet:w-full max-w-[141px]">
          <img
            src={product.imageUrl || fallbackImg}
            alt={product.productName}
            className="object-fit rounded-md aspect-square border"
          />
        </div>
        <div className="flex flex-col justify-around tablet-sm:gap-y-0.5">
          <p className="font-bold text-custom-p">{product.productName}</p>
          <p className="text-custom-gray-dark text-custom-p">{product.sellerName}</p>
          <p className="text-custom-green font-semibold text-custom-p">{formatCurrency(product.price)} 원</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="quantity" className="text-custom-input font-semibold whitespace-nowrap">
          수량
        </label>
        <QuantitySelector />
      </div>
    </section>
  );
};

export default ProductSummary;
