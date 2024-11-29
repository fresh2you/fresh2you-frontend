import Button from "./Button";
import handleNegotiation from "../../detail/utils/handleNegotiation";
import { NavigateFunction } from "react-router-dom";
import useChatRooms from "@/pages/chat/hooks/useChatRooms";

interface ProductActionButtonsProps {
  product: IProductList;
  navigate: NavigateFunction;
}

const ProductActionButtons: React.FC<ProductActionButtonsProps> = ({ product, navigate }) => {
  const { refetch } = useChatRooms();
  return (
    <div className="flex gap-2 mobile:mt-1 tablet-sm:mt-2">
      <Button
        className="text-white bg-custom-green hover:bg-custom-green-hover"
        text="구매하기"
        onClick={() => navigate(`/purchase/${product.productId}`)}
      />
      <Button
        className="bg-custom-gray-light text-custom-black hover:bg-custom-gray-dark"
        text="협상하기"
        onClick={() => handleNegotiation(product, navigate, refetch)}
      />
    </div>
  );
};

export default ProductActionButtons;
