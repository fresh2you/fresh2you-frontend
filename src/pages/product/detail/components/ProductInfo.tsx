import Button from "../../common/components/Button";
import { formatCurrency } from "../../../../utils/commonUtils";
import { useNavigate } from "react-router-dom";
import ProductActionButtons from "../../common/components/ProductActionButtons";

const fallbackImg = "https://i.postimg.cc/SK4GnMjT/fallback.png";

type ProductInfoProps =
  | { inChat: true; product: Product; className?: string }
  | { inChat?: false; product: IProductList; className?: string };

const ProductInfo = ({ inChat = false, product, className = "" }: ProductInfoProps) => {
  const navigate = useNavigate();
  return (
    <div className={`flex gap-4 items-center ${className}`}>
      <div className="flex justify-center items-center w-1/3 h-1/3 mobile:min-w-[135px] mobile:min-h-[135px]">
        <img
          src={product.imageUrl || fallbackImg}
          alt={product.productName}
          className="object-cover border rounded aspect-square"
        />
      </div>
      <div className="flex flex-col h-5/6 justify-evenly">
        <h3 className="mb-1 font-bold text-custom-h3">{product.productName}</h3>
        {!inChat && "sellerName" in product && (
          <p className="text-custom-gray-dark text-custom-p">{product.sellerName}</p>
        )}
        <p className="font-semibold text-custom-green text-custom-p">{formatCurrency(product.price)} 원</p>
        {inChat ? (
          <Button
            className="self-start mt-2 text-white bg-custom-green hover:bg-custom-green-hover"
            text="구매하기"
            onClick={() => navigate(`/purchase/${product.productId}`)}
          />
        ) : (
          <ProductActionButtons product={product as IProductList} navigate={navigate} />
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
