import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchCategories from "../../hooks/useFetchCategories";
import SubCategoryItems from "../SubCategoryItems";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CategoryButtons = ({ handleCategoryChange }) => {
  const navigate = useNavigate();
  const categories = useFetchCategories();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const isLoading = !categories.length;
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (category) => {
    if (category.categoryId === undefined) {
      handleCategoryChange(undefined);
      setSelectedCategory("전체");
      setIsOpen(false);
    } else {
      if (selectedCategory !== category.categoryName) {
        handleCategoryChange(category.categoryId);
        setSelectedCategory(category.categoryName);
        setIsOpen(true);
      } else {
        setIsOpen((prevIsOpen) => !prevIsOpen);
      }
    }
  };

  const handleItemClick = (item) => {
    navigate(`/page/${item}`);
  };

  const renderItems = () => {
    const selectedCat = categories.find((cat) => cat.categoryName === selectedCategory);
    const items = selectedCat.subCategories;

    return <SubCategoryItems items={items} onItemClick={handleItemClick} />;
  };
  const allCategories = [{ categoryId: undefined, categoryName: "전체" }, ...categories];
  return (
    <>
      <div className="flex tablet:gap-4 w-full mobile:gap-2 justify-center">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                className={`mobile:h-[34px] tablet:h-[42px] rounded-lg ${
                  index === 2 ? "mobile:w-[94px] tablet:w-[126px] " : "mobile:w-[44px] tablet:w-[55px]"
                }`}
              />
            ))
          : allCategories.map((category, index) => (
              <button
                key={category.categoryId ? category.categoryId : `${category.categoryName}-${index}`}
                className={`px-2.5 py-1 rounded-lg custom-focus whitespace-nowrap
                text-custom-btn-text
                ${
                  selectedCategory === category.categoryName
                    ? "bg-custom-green text-white"
                    : "bg-custom-gray-light text-custom-black hover:bg-custom-green-hover hover:text-white"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category.categoryName}
              </button>
            ))}
      </div>

      {selectedCategory && isOpen && renderItems()}
    </>
  );
};

export default CategoryButtons;
