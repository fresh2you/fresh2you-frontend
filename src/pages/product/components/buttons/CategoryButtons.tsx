import useFetchCategories from "../../hooks/useFetchCategories";
import { renderCategoryButtons, renderSkeletons, renderItems } from "../../utils/renderComponent";
import { useCategoryLogic } from "../../hooks/useCategoryLogic";

const CategoryButtons = () => {
  const categories = useFetchCategories();
  const isLoading = !categories.length;
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
  const allCategories = [{ categoryId: undefined, categoryName: "전체" }, ...categories];

  return (
    <>
      <div className="flex tablet:gap-4 w-full mobile:gap-2 justify-center">
        {isLoading
          ? renderSkeletons()
          : renderCategoryButtons({
              allCategories,
              selectedCategory,
              setSelectedCategory,
              selectedCategoryId,
              setSelectedCategoryId,
              setProducts,
              setPageNumber,
              setHasMore,
              setIsOpen,
            })}
      </div>
      {selectedCategory &&
        isOpen &&
        renderItems({
          categories,
          selectedCategory,
          selectedCategoryId,
          setSelectedCategoryId,
          setProducts,
          setPageNumber,
          setHasMore,
        })}
    </>
  );
};

export default CategoryButtons;