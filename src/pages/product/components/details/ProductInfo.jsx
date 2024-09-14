import React from "react";
import Button from "../buttons/Button";
import { formatCurrency } from "../../../../utils/commonUtils";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ product }) => {
  const navigate = useNavigate();

  if (!product) {
    return <div className="text-center mt-20">No product data available.</div>;
  }

  return (
    <div className="flex items-center 2xs:flex-col gap-x-4 2xs:gap-y-2">
      <div className="flex justify-center items-center">
        <img
          src={product.img}
          alt={product.name}
          className="object-contain border rounded-sm lg:max-w-[180px] md:max-w-[160px] max-w-[140px] xs:max-w-[120px]"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold md:mb-1 xs:text-xl">{product.name}</h1>
        <p className="text-custom-gray-dark md:mb-1">{product.seller}</p>
        <p className="text-xl text-custom-green font-semibold mb-1">{formatCurrency(product.price)} 원</p>
        <div className="flex gap-2">
          <Button
            className="bg-custom-green text-white hover:bg-custom-green-hover whitespace-nowrap text-base md:text-lg xs:text-sm"
            text="구매하기"
            onClick={() => navigate(`/purchase/${product.product_id}`)}
          />
          <Button
            className="bg-custom-gray-light text-custom-black hover:bg-custom-gray-dark whitespace-nowrap text-base md:text-lg xs:text-sm"
            text="협상하기"
            onClick={() => navigate(`/chatting/${product.product_id}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
