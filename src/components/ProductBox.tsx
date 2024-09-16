import { useNavigate } from "react-router-dom";
import { SearchedItemsTypes } from "../mockdata/searchMockData";

interface ProductBoxProps {
  item: SearchedItemsTypes;
}

const ProductBox = ({ item }: ProductBoxProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/product/${item.product_id}`)}
      className="w-full px-0 py-2 flex items-center gap-8 border-0 border-b-[1px] border-gray-300 rounded-none border-black bg-white"
    >
      <div className="h-16 bg-gray-400 rounded-lg aspect-square">
        {item.img && <img src={item.img} alt={item.name} className="object-cover w-full h-full" />}
      </div>

      <div className="flex flex-col gap-1 py-1">
        <div className="text-base">{item.name}</div>
        <div className="text-xs text-gray-400">
          {item.locale} <span>{item.updated_at}</span>
        </div>
        <div className="text-sm">{item.price.toLocaleString()}원</div>
      </div>
    </button>
  );
};

export default ProductBox;
