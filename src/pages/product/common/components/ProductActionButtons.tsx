import Button from "./Button";
import handleNegotiation from "../../detail/utils/handleNegotiation";
import { NavigateFunction } from "react-router-dom";

interface ProductActionButtonsProps {
  product: IProductList;
  navigate: NavigateFunction;
}

const ProductActionButtons: React.FC<ProductActionButtonsProps> = ({ product, navigate }) => {
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
        onClick={() => handleNegotiation(product, navigate)}
      />
    </div>
  );
};

export default ProductActionButtons;
