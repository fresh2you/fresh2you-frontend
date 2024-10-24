import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SubCategoryItems from "../components/SubCategoryItems";
import { NavigateFunction } from "react-router-dom";
import { handleCategoryClick } from "./categoryHandlers";

export const renderSkeletons = (count: number = 6) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          className={`mobile:h-[34px] tablet:h-[42px] rounded-lg ${
            index === 2 ? "mobile:w-[94px] tablet:w-[126px] " : "mobile:w-[44px] tablet:w-[55px]"
          }`}
        />
      ))}
    </>
  );
};

export const renderCategoryButtons = (
  allCategories: (Category | { categoryId?: undefined; categoryName: string })[],
  selectedCategory: string,
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,
  selectedCategoryId: number | undefined,
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<number | undefined>>,
  setProducts: React.Dispatch<React.SetStateAction<IProductList[]>>,
  setPageNumber: React.Dispatch<React.SetStateAction<number>>,
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  return (
    <>
      {allCategories.map((category) => (
        <button
          key={category.categoryName}
          className={`px-2.5 py-1 rounded-lg custom-focus whitespace-nowrap text-custom-btn-text ${
            selectedCategory === category.categoryName
              ? "bg-custom-green text-white"
              : "bg-custom-gray-light text-custom-black hover:bg-custom-green-hover hover:text-white"
          }`}
          onClick={() =>
            handleCategoryClick({
              category,
              setSelectedCategory,
              setIsOpen,
              selectedCategoryId,
              setProducts,
              setPageNumber,
              setHasMore,
              setSelectedCategoryId,
              selectedCategory,
            })
          }
        >
          {category.categoryName}
        </button>
      ))}
    </>
  );
};

export const renderItems = (categories: Category[], selectedCategory: string, navigate: NavigateFunction) => {
  const selectedCat: Category | undefined = categories.find((cat: Category) => cat.categoryName === selectedCategory);
  const items: SubCategory[] | undefined = selectedCat!.subCategories;
  if (items) {
    return <SubCategoryItems items={items} navigate={navigate} />;
  }
};
