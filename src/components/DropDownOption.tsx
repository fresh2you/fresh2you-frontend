interface DropDownOptionProps {
  option: string;
  onClick: () => void;
}

const DropDownOption = ({ option, onClick }: DropDownOptionProps) => {
  return (
    <button onClick={onClick} className="w-full px-4 py-2 bg-white">
      {option}
    </button>
  );
};

export default DropDownOption;
