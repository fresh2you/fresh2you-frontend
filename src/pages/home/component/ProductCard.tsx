import { useNavigate } from "react-router-dom";
const fallbackImg = "https://i.postimg.cc/SK4GnMjT/fallback.png";

export interface ProductCardProps {
  productId: number;
  productName: string;
  sellerName: string;
  description: string;
  price: number;
  productImage?: string;
}

const ProductCard = ({
  productId,
  productName,
  sellerName,
  /* description, */
  price = 0,
  productImage,
}: ProductCardProps) => {
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(`/product/${productId}`);
  };

  return (
    <button
      className="flex flex-col h-auto gap-2 p-2 border rounded-lg shadow-lg border-custom-gray-light w-44 shrink-0"
      onClick={onClickCard}
    >
      <div className="flex justify-center w-full overflow-hidden ">
        {productImage && (
          <img
            src={productImage ? productImage : fallbackImg}
            alt={productName}
            className="w-16 h-16 rounded-lg aspect-square"
          />
        )}
      </div>
      <div className="flex flex-col items-start gap-1 px-2 mt-2">
        <div className="font-bold text-black">{productName}</div>
        <div className="font-medium text-custom-gray-dark">{sellerName}</div>
        <div className="font-semibold text-custom-green">{price.toLocaleString()} 원</div>
      </div>
      {/* <div className="flex items-center w-full truncate">{description}</div> */}
    </button>
  );
};

export default ProductCard;
