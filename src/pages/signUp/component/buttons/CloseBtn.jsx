import "../../../../styles/styles.css";
export const CloseBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute -top-2 -right-2 text-2xl text-white bg-transparent 
      border-transparent hover:text-gray-200"
    >
      &times;
    </button>
  );
};
