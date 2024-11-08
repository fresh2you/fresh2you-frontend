import "../styles/styles.css";
interface CloseBtnProps {
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
export const CloseBtn: React.FC<CloseBtnProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-custom-h3 border-none
        ${className ? className : "absolute -top-2 -right-2 bg-transparent hover:text-gary-200 text-white"}`}
    >
      &times;
    </button>
  );
};
