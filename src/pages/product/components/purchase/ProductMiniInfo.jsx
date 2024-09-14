import React from "react";
import { formatCurrency } from "../../../../utils/commonUtils";
import { useNavigate } from "react-router-dom";
import PlusImg from "../..//../../assets/img/plus.png";
import MinusImg from "../../../../assets/img/minus.png";
import ProductDetails from "../ProductDetails";
const ProductMiniInfo = ({ product, quantity, setQuantity }) => {
  const navigate = useNavigate();

  if (!product) {
    return <div className="text-center mt-20">No product data available.</div>;
  }

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  return (
    <div className="flex w-4/5 flex-col md:flex-row gap-4 md:gap-0 md:items-center">
      <ProductDetails product={product} />
      <div className="flex items-center gap-4 md:ml-auto ml-0">
        <label htmlFor="quantity" className="text-lg font-semibold">
          수량
        </label>
        <div className="flex items-center border border-gray-200 rounded-sm">
          <button
            type="button"
            onClick={() => handleQuantityChange(quantity - 1)}
            className="flex items-center justify-center w-12 h-12 bg-custom-gray-light hover:bg-gray-300 hover:border-transparent focus:outline-none p-0 rounded-sm"
          >
            <img src={MinusImg} alt="Decrease quantity" className="w-6 h-6" />
          </button>
          <p className="text-center w-12 text-lg font-semibold">{quantity}</p>
          <button
            type="button"
            onClick={() => handleQuantityChange(quantity + 1)}
            className="flex items-center justify-center w-12 h-12 bg-custom-gray-light hover:bg-gray-300 hover:border-transparent focus:outline-none p-0 rounded-sm"
          >
            <img src={PlusImg} alt="Increase quantity" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductMiniInfo;
