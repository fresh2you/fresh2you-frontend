import MinusImg from "../../../../assets/icons/minus-rounded.svg";
import PlusImg from "../../../../assets/icons/plus-rounded.svg";
import QuantityButton from "./QuantityBtn";
import { useAtom } from "jotai";
import { quantityAtom } from "../../common/atom/atom";
import { handleQuantityChange } from "../utils/purchaseHandlers";

const QuantitySelector: React.FC = () => {
  const [quantity, setQuantity] = useAtom(quantityAtom);

  return (
    <div className="flex">
      <QuantityButton
        onClick={() => handleQuantityChange(quantity - 1, setQuantity)}
        IconComponent={MinusImg}
        altText="수량 빼기"
      />
      <input
        id="quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-10 leading-4 text-center border text-custom-black text-custom-input custom-focus-light border-custom-gray-light focus:relative focus:z-2"
        required
        aria-required="true"
        aria-labelledby={`label-quantity`}
      />
      <QuantityButton
        onClick={() => handleQuantityChange(quantity + 1, setQuantity)}
        IconComponent={PlusImg}
        altText="수량 더하기"
      />
    </div>
  );
};

export default QuantitySelector;
