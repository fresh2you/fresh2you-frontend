import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SubCategoryItems from "../components/SubCategoryItems";
import { handleCategoryClick } from "./categoryHandlers";
import { RenderCategoryButtonsProps, RenderItemsProps } from "@/types/product/productProps";

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

export const renderCategoryButtons = ({
  allCategories,
  selectedCategory,
  setSelectedCategory,
  selectedCategoryId,
  handlers,
  setIsOpen,
}: RenderCategoryButtonsProps) => {
  return (
    <>
      {allCategories.map((category) => (
        <button
          key={category.categoryName}
          className={`px-2.5 py-1 rounded-lg custom-focus-light whitespace-nowrap text-custom-btn-text ${
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
              handlers,
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

export const renderItems = ({ categories, selectedCategory, selectedCategoryId, handlers }: RenderItemsProps) => {
  const selectedCat: Category | undefined = categories.find((cat: Category) => cat.categoryName === selectedCategory);
  const items: SubCategory[] | undefined = selectedCat!.subCategories;
  if (items) {
    return (
      <SubCategoryItems
        items={items}
        selectedCategoryId={selectedCategoryId}
        handlers={handlers}
        selectedCategory={selectedCategory}
      />
    );
  }
};
