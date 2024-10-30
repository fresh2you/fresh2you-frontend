interface QuantityButtonProps {
  onClick: () => void;
  IconComponent: React.ElementType;
  altText: string;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ onClick, IconComponent, altText }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="custom-focus-light flex items-center justify-center
      bg-custom-gray-light hover:bg-gray-300 
      custom-focus-light p-1 rounded-none focus:relative focus:z-2"
      aria-label={altText}
    >
      <IconComponent alt={altText} className="w-7 h-7" />
    </button>
  );
};

export default QuantityButton;
