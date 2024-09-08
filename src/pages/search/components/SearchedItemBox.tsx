import { useNavigate } from 'react-router-dom';
import { SearchedItemsTypes } from '../../../mockdata/searchMockData';

interface SearchedItemBoxProps {
  item: SearchedItemsTypes;
}

const SearchedItemBox = ({ item }: SearchedItemBoxProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/product/${item.product_id}`)}
      className="w-full px-0 py-2 flex items-center gap-8 border-0 border-b-[1px] border-gray-300 rounded-none border-black bg-white"
    >
      <div className="h-16 aspect-square rounded-lg bg-gray-400">
        {item.img && <img src={item.img} alt={item.name} className="w-full h-full object-cover" />}
      </div>

      <div className="py-1 flex flex-col gap-1">
        <div className="text-base">{item.name}</div>
        <div className="text-xs text-gray-400">
          {item.locale} <span>{item.updated_at}</span>
        </div>
        <div className="text-sm">{item.price.toLocaleString()}원</div>
      </div>
    </button>
  );
};

export default SearchedItemBox;
