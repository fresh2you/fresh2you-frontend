import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchCategories from "../../hooks/useFetchCategories";
import SubCategoryItems from "../SubCategoryItems";
import "../../../../styles/styles.css";
const CategoryButtons = () => {
  const navigate = useNavigate();
  const categories = useFetchCategories();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
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
      <div className="flex gap-4 w-full mobile:gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category.categoryId}
            className={`px-2.5 py-1 rounded-lg custom-focus whitespace-nowrap
              text-custom-btn-text
              ${
                selectedCategory === category.categoryName
                  ? "bg-custom-green text-white"
                  : "bg-custom-gray-light text-custom-black hover:bg-custom-green-hover hover:text-white"
              }`}
            onClick={() => handleCategoryClick(category.categoryName)}
          >
            {category.categoryName}
          </button>
        ))}
      </div>
      <div className="mx-auto rounded-lg shadow-lg overflow-hidden bg-custom-green-200 mt-2 mb-4 category-modal">
        {selectedCategory && renderItems()}
      </div>
    </>
  );
};

export default CategoryButtons;
