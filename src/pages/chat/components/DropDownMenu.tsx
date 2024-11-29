import { handleAction } from "../utils/chatHandlers";
import { useNavigate } from "react-router-dom";

interface DropDownMenuProps {
  unmount: () => void;
  productId: string;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ unmount, productId }) => {
  const navigate = useNavigate();
  return (
    <div className="absolute w-48 h-48 border border-gray-200 rounded-r shadow-sm bottom-[43px] -left-6 bg-custom-green-100">
      <button
        onClick={() => handleAction("협상하기", unmount, navigate, productId)}
        className="w-full px-4 py-2 text-left text-gray-700 bg-transparent border-0 border-b rounded-none border-b-gray-700 hover:bg-custom-green-200"
        aria-label="협상하기"
      >
        협상하기
      </button>
    </div>
  );
};
export default DropDownMenu;
