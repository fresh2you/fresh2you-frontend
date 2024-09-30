import MinusImg from "../../../../assets/img/minus.png";
import PlusImg from "../../../../assets/img/plus.png";
import QuantityButton from "./QuantityBtn";
const QuantitySelector = ({ quantity, setQuantity }) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  return (
    <div className="flex items-center border border-gray-200 rounded-sm">
      <QuantityButton onClick={() => handleQuantityChange(quantity - 1)} imgSrc={MinusImg} altText="수량 빼기" />
      <p className="text-center mobile:w-8 tablet:w-10 text-lg font-semibold">{quantity}</p>
      <QuantityButton onClick={() => handleQuantityChange(quantity + 1)} imgSrc={PlusImg} altText="수량 더하기" />
    </div>
  );
};

export default QuantitySelector;
