import { useNavigate } from 'react-router-dom';

export interface ProductCardProps {
  product_id: number;
  name: string;
  seller: string;
  description: string;
  price: number;
  img?: string;
}

const ProductCard = ({
  product_id,
  name,
  seller,
  description,
  price = 0,
  img,
}: ProductCardProps) => {
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(`/product/${product_id}`);
  };

  return (
    <div
      className="w-auto h-auto p-2 flex flex-col gap-2 shrink-0 rounded-lg border border-black"
      onClick={onClickCard}
    >
      <div className="w-16 h-16 aspect-square rounded-lg border border-black bg-gray-300">
        {img && <img src={img} alt={name} />}
      </div>
      <div>
        {name} <span>{seller}</span>
      </div>
      <div>{description}</div>
      <div>{price.toLocaleString()} 원</div>
    </div>
  );
};

export default ProductCard;
