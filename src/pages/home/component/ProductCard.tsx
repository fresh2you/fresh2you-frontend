import { useNavigate } from "react-router-dom";

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
  description,
  price = 0,
  productImage,
}: ProductCardProps) => {
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(`/product/${productId}`);
  };

  return (
    <button
      className="flex flex-col h-auto gap-2 p-2 border border-black rounded-lg w-44 shrink-0"
      onClick={onClickCard}
    >
      <div className="w-16 h-16 overflow-hidden bg-gray-300 border border-black rounded-lg aspect-square">
        {productImage && <img src={productImage} alt={productName} className="w-full h-full rounded-lg" />}
      </div>
      <div>
        {productName} <span>{sellerName}</span>
      </div>
      <div className="flex items-center w-full truncate">{description}</div>
      <div>{price.toLocaleString()} 원</div>
    </button>
  );
};

export default ProductCard;
