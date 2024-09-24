import { useNavigate } from "react-router-dom";
import IconRight from "@/assets/icons/chevron-right.svg";

interface MenuDropDownOptionProps {
  option: { name: string; to?: string; iconRemove?: true };
  onClick: () => void;
}

const MenuDropDownOption = ({ option: { name, to, iconRemove }, onClick }: MenuDropDownOptionProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        if (to) navigate(to);
        onClick();
      }}
      className="flex items-center justify-between w-full h-auto p-4 font-semibold bg-white last:span:hidden hover:bg-custom-green-200 hover:text-white last:border-t last:text-custom-gray-dark"
    >
      {name}
      <IconRight className={`${iconRemove && "hidden"} text-inherit text-custom-gray-dark hover:text-inherit`} />
    </button>
  );
};

export default MenuDropDownOption;
