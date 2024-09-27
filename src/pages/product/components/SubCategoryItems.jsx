const SubCategoryItems = ({ items, onItemClick }) => {
  return (
    <div className="flex flex-col pl-1.5 py-1">
      <div className="flex flex-wrap gap-2 p-2">
        {items.map((item) => (
          <div
            key={item.categoryId}
            className="flex-shrink-0 w-1/4 cursor-pointer hover:text-custom-green-hover transition-colors 
              hover:scale-105 font-semibold text-sm mr-4 whitespace-nowrap"
            onClick={() => onItemClick(item.categoryId)}
          >
            {item.categoryName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryItems;
