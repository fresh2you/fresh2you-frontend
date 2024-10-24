export interface CommonCategoryProps {
  selectedCategory: string;
  selectedCategoryId: number | undefined;
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<number | undefined>>;
  setProducts: React.Dispatch<React.SetStateAction<IProductList[]>>;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RenderCategoryButtonsProps extends CommonCategoryProps {
  allCategories: (Category | { categoryId?: undefined; categoryName: string })[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RenderItemsProps extends CommonCategoryProps {
  categories: Category[];
}

export interface HandleCategoryClickProps extends CommonCategoryProps {
  category: Category | { categoryId?: undefined; categoryName: string };
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}