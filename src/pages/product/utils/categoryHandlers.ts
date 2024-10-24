import { HandleCategoryClickProps } from "@/types/product/productProps";

export const handleCategoryChange = (
  categoryId: number | undefined,
  selectedCategoryId: number | undefined,
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<number | undefined>>,
  setProducts: React.Dispatch<React.SetStateAction<IProductList[]>>,
  setPageNumber: React.Dispatch<React.SetStateAction<number>>,
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>,
) => {
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
  setProducts,
  setPageNumber,
  setHasMore,
  setSelectedCategoryId,
  selectedCategory,
}: HandleCategoryClickProps) => {
  const { categoryId, categoryName } = category;

  const newCategoryId = categoryId ?? undefined;
  const isNewCategory = selectedCategory !== categoryName;
  const isCategoryAll = newCategoryId === undefined;

  handleCategoryChange(
    newCategoryId,
    selectedCategoryId,
    setSelectedCategoryId,
    setProducts,
    setPageNumber,
    setHasMore,
  );

  setSelectedCategory(isCategoryAll ? "전체" : categoryName);
  setIsOpen(isCategoryAll ? false : isNewCategory ? true : (prevIsOpen) => !prevIsOpen);
};
