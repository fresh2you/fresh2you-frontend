import { HandleCategoryClickProps } from "@/types/product/productProps";
import { CategoryHandlers } from "@/types/product/productProps";

export const handleCategoryChange = (
  categoryId: number | undefined,
  selectedCategoryId: number | undefined,
  handlers: CategoryHandlers,
) => {
  const { setSelectedCategoryId, setProducts, setPageNumber, setHasMore } = handlers;
  if (selectedCategoryId === categoryId) return;
  setSelectedCategoryId(categoryId);
  setProducts([]);
  setPageNumber(0);
  setHasMore(true);
};

export const handleCategoryClick = ({
  category,
  setSelectedCategory,
  setIsOpen,
  selectedCategoryId,
  handlers,
  selectedCategory,
}: HandleCategoryClickProps) => {
  const { categoryId, categoryName } = category;
  const newCategoryId = categoryId ?? undefined;
  const isNewCategory = selectedCategory !== categoryName;
  const isCategoryAll = newCategoryId === undefined;

  handleCategoryChange(newCategoryId, selectedCategoryId, handlers);
  setSelectedCategory(isCategoryAll ? "전체" : categoryName);
  setIsOpen(isCategoryAll ? false : isNewCategory ? true : (prevIsOpen) => !prevIsOpen);
};
