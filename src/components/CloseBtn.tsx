import "../styles/styles.css";
interface CloseBtnProps {
  onClick: () => void;
}
export const CloseBtn: React.FC<CloseBtnProps> = ({ onClick }) => {
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
