import React from 'react';
import Button from './buttons/Button';
import { formatCurrency } from '../../../utils/commonUtils';
import { useNavigate } from 'react-router-dom';
const ProductInfo = ({ product }) => {
  const navigate = useNavigate();
  if (!product) {
    return <div className="text-center mt-20">No product data available.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center md:gap-0 gap-8">
      <div className="flex justify-center items-center w-full md:w-80">
        <img src={product.img} alt={product.name} className="object-contain w-full h-80 border" />
      </div>
      <div className="flex flex-col justify-between w-full md:w-72">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg md:text-xl text-custom-gray-dark mb-2">{product.seller}</p>
        <p className="text-lg md:text-2xl text-custom-green font-semibold mb-4">{formatCurrency(product.price)} 원</p>
        <p className="text-base md:text-lg mb-4">{product.description}</p>
        <div className="flex flex-col md:flex-row gap-2">
          <Button
            className="bg-custom-green text-white hover:bg-custom-green-hover"
            text="구매하기"
            onClick={() => navigate('/purchase/${product.id}')}
          />
          <Button
            className="bg-custom-gray-light text-custom-black hover:bg-custom-gray-dark"
            text="협상하기"
            onClick={() => navigate('/chatting/${product.id}')}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
