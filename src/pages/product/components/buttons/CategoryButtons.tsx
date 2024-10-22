import { useNavigate } from "react-router-dom";
import useFetchCategories from "../../hooks/useFetchCategories";
import { renderCategoryButtons, renderSkeletons, renderItems } from "../../utils/renderComponent";
import useCategorySelection from "../../hooks/useCategorySelection";

interface CategoryButtonsProps {
  handleCategoryChange: (categoryId?: number) => void;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ handleCategoryChange }) => {
  const navigate = useNavigate();
  const categories = useFetchCategories();
  const isLoading = !categories.length;
  const { selectedCategory, isOpen, handleCategoryClick } = useCategorySelection(categories, handleCategoryChange);

  const allCategories = [{ categoryId: undefined, categoryName: "전체" }, ...categories];
  return (
    <>
      <div className="flex tablet:gap-4 w-full mobile:gap-2 justify-center">
        {isLoading ? renderSkeletons() : renderCategoryButtons(allCategories, selectedCategory, handleCategoryClick)}
      </div>
      {selectedCategory && isOpen && renderItems(categories, selectedCategory, navigate)}
    </>
  );
};

export default CategoryButtons;
