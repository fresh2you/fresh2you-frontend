import Button from "../../common/components/Button";
import { formatCurrency } from "../../../../utils/commonUtils";
import { useNavigate } from "react-router-dom";
import ProductActionButtons from "../../common/components/ProductActionButtons";
import useLikedStatus from "../../listing/hooks/useLikedStatus";
import LikeButton from "../../common/components/LikeButton";
const fallbackImg = "https://i.postimg.cc/SK4GnMjT/fallback.png";

const ProductInfo = ({
  inChat = false,
  product,
  className = "",
}: {
  product: IProductList;
  inChat?: boolean;
  className?: string;
}) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useLikedStatus(product.productId);
  return (
    <div className={`flex gap-4 items-center ${className} relative`}>
      <div
        className="flex justify-center items-center w-1/3 h-1/3 mobile:min-w-[135px]
       mobile:min-h-[135px]"
      >
        <img
          src={product.imageUrl || fallbackImg}
          alt={product.productName}
          className={`object-cover border rounded aspect-square`}
        />
      </div>
      <div className="flex flex-col h-5/6 justify-evenly">
        <div className="flex items-center gap-1 whitespace-nowrap">
          <h3 className={`font-bold text-custom-h3`}>{product.productName}</h3>
          <LikeButton
            productId={product?.productId}
            productName={product?.productName}
            isLiked={isLiked}
            setIsLiked={setIsLiked}
          />
        </div>
        <p className="text-custom-gray-dark text-custom-p">{product.sellerName}</p>
        <p className={`text-custom-green font-semibold text-custom-p`}>{formatCurrency(product.price)} 원</p>
        {!inChat && <ProductActionButtons product={product} navigate={navigate} />}
      </div>
      {inChat && (
        <Button
          className="absolute bottom-0 left-0 text-white bg-custom-green hover:bg-custom-green-hover opacity-85"
          text="구매하기"
          onClick={() => navigate(`/purchase/${product.productId}`)}
        />
      )}
    </div>
  );
};

export default ProductInfo;
