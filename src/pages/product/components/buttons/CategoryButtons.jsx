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
    if (selectedCategory !== category.categoryName) {
      console.log(selectedCategory);
      console.log(category.categoryName);
      handleCategoryChange(category.categoryId);
      setSelectedCategory(category.categoryName);
      setIsOpen(true);
    } else {
      if (!isOpen) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
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
          : categories.map((category) => (
              <button
                key={category.categoryId}
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
