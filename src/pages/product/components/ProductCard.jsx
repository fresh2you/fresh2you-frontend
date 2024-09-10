import { forwardRef } from 'react';
import { formatCurrency } from '../../../utils/commonUtils';
import { useNavigate } from 'react-router-dom';

const ProductCard = forwardRef(({ product }, ref) => {
  const navigate = useNavigate();
  return (
    <div
      ref={ref}
      className="bg-custom-white shadow-lg rounded-xl overflow-hidden w-full max-w-xs border border-custom-gray-light h-[296px]"
    >
      <div className="flex justify-center items-center w-full mt-4">
        <img src={product.img} alt={product.name} className="object-contain w-28 h-28" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-xl text-custom-gray-dark">{product.seller}</p>
        <p className="text-custom-green font-semibold text-xl">{formatCurrency(product.price)} 원</p>
        <button
          className="mt-2 w-full bg-custom-green text-white py-2 rounded-lg hover:bg-custom-green-hover transition font-semibold"
          style={{ borderColor: 'transparent', outline: 'none' }}
          onClick={() => navigate(`./${product.product_id}`)}
        >
          구매하기
        </button>
      </div>
    </div>
  );
});

export default ProductCard;
