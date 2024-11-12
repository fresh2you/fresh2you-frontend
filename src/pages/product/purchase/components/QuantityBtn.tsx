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
      className="flex items-center justify-center p-1 rounded-none custom-focus-light bg-custom-gray-light hover:bg-gray-300 focus:relative focus:z-2"
      aria-label={altText}
    >
      <IconComponent alt={altText} className="w-7 h-7" />
    </button>
  );
};

export default QuantityButton;
