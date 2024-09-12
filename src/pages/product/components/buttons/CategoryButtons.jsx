import React, { useState } from 'react';
import categories from '../../../../data/categories';
import { useNavigate } from 'react-router-dom';

const CategoryButtons = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setSelectedSubCategory(null); // Reset subcategory when category changes
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory === selectedSubCategory ? null : subCategory);
  };

  const handleItemClick = (item) => {
    navigate(`/page/${item}`);
  };

  const renderItems = () => {
    if (!selectedCategory || selectedCategory === '기타') return null;

    const items = categories[selectedCategory];
    if (!items) return null;

    return (
      <div className="flex flex-col pl-4 pb-3">
        <div className="flex flex-wrap gap-2 p-4 max-w-xl">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer hover:text-custom-green-hover transition-colors whitespace-nowrap hover:scale-105 font-semibold text-lg"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-2 max-w-2xl">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg focus:outline-none hover:border-transparent ${
              selectedCategory === category
                ? 'bg-custom-green text-white'
                : 'bg-custom-gray-light text-custom-black hover:bg-custom-green-hover hover:text-white'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="inline-flex rounded-lg shadow-lg overflow-hidden bg-custom-green-200">
        {selectedCategory && renderItems()}
      </div>
    </>
  );
};

export default CategoryButtons;
