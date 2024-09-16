const DropDownMenu = () => {
  const handleOptionClick = (action) => {
    console.log(action);
    setIsOpen(false);
  };
  return (
    <div
      className="absolute right-0 top-[58px]
     w-48 bg-white border border-gray-200 shadow-lg rounded-bl"
    >
      <button
        onClick={() => handleOptionClick("block")}
        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none hover:border-transparent rounded-none"
      >
        차단하기
      </button>
    </div>
  );
};
export default DropDownMenu;
