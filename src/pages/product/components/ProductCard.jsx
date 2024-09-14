import { forwardRef } from "react";
import { formatCurrency } from "../../../utils/commonUtils";
import { useNavigate } from "react-router-dom";

const ProductCard = forwardRef(({ product }, ref) => {
  const navigate = useNavigate();
  return (
    <div
      ref={ref}
      className="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs border border-custom-gray-light 
      cursor-pointer pt-2 w-40 h-auto"
      onClick={() => navigate(`./${product.product_id}`)}
    >
      <div className="flex justify-center items-center w-full">
        <img src={product.img} alt={product.name} className="object-contain w-28 h-28 border rounded" />
      </div>
      <div className="py-2 px-4 flex flex-col">
        <h2 className="font-semibold">{product.name}</h2>
        <p className="text-custom-gray-dark">{product.seller}</p>
        <p className="text-custom-green font-semibold">{formatCurrency(product.price)} 원</p>
      </div>
    </div>
  );
});

export default ProductCard;
