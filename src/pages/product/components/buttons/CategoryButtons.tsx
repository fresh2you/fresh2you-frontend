import useFetchCategories from "../../hooks/useFetchCategories";
import { renderCategoryButtons, renderSkeletons, renderItems } from "../../utils/renderComponent";
import { useCategoryLogic } from "../../hooks/useCategoryLogic";

const CategoryButtons = () => {
  const { categories, isLoading } = useFetchCategories();
  const {
    selectedCategory,
    setSelectedCategory,
    isOpen,
    setIsOpen,
    setProducts,
    setPageNumber,
    setHasMore,
    selectedCategoryId,
    setSelectedCategoryId,
  } = useCategoryLogic();
  const handlers = {
    setSelectedCategoryId,
    setProducts,
    setPageNumber,
    setHasMore,
  };
  const allCategories = [{ categoryId: undefined, categoryName: "전체" }, ...categories];

  return (
    <>
      <div className="flex justify-between max-w-[420px] mx-auto">
        {isLoading
          ? renderSkeletons()
          : renderCategoryButtons({
              allCategories,
              selectedCategory,
              setSelectedCategory,
              selectedCategoryId,
              handlers,
              setIsOpen,
            })}
      </div>
      {selectedCategory &&
        isOpen &&
        renderItems({
          categories,
          selectedCategory,
          selectedCategoryId,
          handlers,
        })}
    </>
  );
};

export default CategoryButtons;
