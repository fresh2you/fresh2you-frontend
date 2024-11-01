import "../../../styles/styles.css";
import { handleCategoryChange } from "../utils/categoryHandlers";
import { SubCategoryItemsProps } from "@/types/product/productProps";

const SubCategoryItems: React.FC<SubCategoryItemsProps> = ({ items, selectedCategoryId, handlers }) => {
  return (
    <div
      className="flex flex-col pl-1.5 py-1 absolute z-10 bg-custom-green-200 opacity-90 
    category-modal rounded-lg shadow-lg mt-2 left-1/2 -translate-x-1/2 w-11/12"
    >
      <div className="flex flex-wrap gap-2 p-2">
        {items.map((item) => (
          <div
            key={item.categoryId}
            className="flex-shrink-0 w-1/4 mr-4 text-sm font-semibold transition-colors cursor-pointer hover:text-custom-green-hover hover:scale-105 whitespace-nowrap"
            onClick={() => handleCategoryChange(item.categoryId, selectedCategoryId, handlers)}
          >
            {item.categoryName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryItems;
