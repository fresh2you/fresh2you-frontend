export interface CategoryHandlers {
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<number | undefined>>;
  setProducts: React.Dispatch<React.SetStateAction<IProductList[]>>;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CommonCategoryProps {
  selectedCategory: string;
  selectedCategoryId: number | undefined;
  handlers: CategoryHandlers;
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

export interface SubCategoryItemsProps extends CommonCategoryProps {
  items: SubCategory[];
}

export interface ProductFormProps {
  productData: ProductDataType;
  setProductData: React.Dispatch<React.SetStateAction<ProductDataType>>;
  isFormValid: boolean;
}
