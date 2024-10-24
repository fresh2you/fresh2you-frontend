import { NavigateFunction } from "react-router-dom";

export const handleSubCategory = (subCategory: number, navigate: NavigateFunction) => {
  navigate(`/page/${subCategory}`);
};

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

interface HandleCategoryClickProps {
  category: Category | { categoryId?: undefined; categoryName: string };
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCategoryId: number | undefined;
  setProducts: React.Dispatch<React.SetStateAction<IProductList[]>>;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<number | undefined>>;
  selectedCategory: string;
}

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
  if (category.categoryId === undefined) {
    handleCategoryChange(undefined, selectedCategoryId, setSelectedCategoryId, setProducts, setPageNumber, setHasMore);
    setSelectedCategory("전체");
    setIsOpen(false);
  } else {
    if (selectedCategory !== category.categoryName) {
      handleCategoryChange(
        category.categoryId,
        selectedCategoryId,
        setSelectedCategoryId,
        setProducts,
        setPageNumber,
        setHasMore,
      );
      setSelectedCategory(category.categoryName);
      setIsOpen(true);
    } else {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }
  }
};
