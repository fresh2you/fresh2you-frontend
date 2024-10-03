import { useNavigate } from "react-router-dom";

interface ProductBoxProps {
  item: {
    productId: number;
    sellerName: string;
    productName: string;
    productDescription: string;
    quantity: number;
    price: number;
    imageUrl: string;
  };
}

const ProductBox = ({ item }: ProductBoxProps) => {
  const navigate = useNavigate();

  console.log(item);

  return (
    <button
      onClick={() => navigate(`/product/${item.productId}`)}
      className="w-full px-0 py-2 flex items-center gap-8 border-0 border-b-[1px] border-gray-300 rounded-none border-black bg-white"
    >
      <div className="h-20 bg-gray-400 rounded-lg aspect-square">
        {item.imageUrl && <img src={item.imageUrl} alt={item.productName} className="object-cover w-full h-full" />}
      </div>

      <div className="flex flex-col items-start justify-start w-full gap-1 py-1">
        <div className="flex flex-col items-start gap-1">
          <div className="text-base font-semibold">{item.productName}</div>
          <div className="text-base font-medium text-left text-gray-500">{item.productDescription}</div>
        </div>

        <div className="flex items-start h-full gap-1 tablet:self-end">
          <div className="text-base">
            수량: {item.quantity}개<span className="mx-2 text-custom-gray-dark">|</span>
          </div>

          <div className="text-base">가격: {item.price.toLocaleString()}원</div>
        </div>
      </div>
    </button>
  );
};

export default ProductBox;
