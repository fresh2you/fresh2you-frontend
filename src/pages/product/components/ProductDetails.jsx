import React from "react";
import { formatCurrency } from "@/utils/commonUtils";

const ProductDetails = ({ product }) => {
  return (
    <div className="flex items-center gap-4">
      <img
        src={product.img}
        alt={product.name}
        className="object-contain w-40 h-40 border rounded-sm xs:w-32 xs:h-32"
      />
      <div className="flex flex-col ml-4">
        <h1 className="font-bold text-2xl xs:text-xl">{product.name}</h1>
        <p className="text-xl text-custom-gray-dark">{product.seller}</p>
        <p className="text-2xl text-custom-green font-semibold whitespace-nowrap">{formatCurrency(product.price)} 원</p>
      </div>
    </div>
  );
};

export default ProductDetails;
