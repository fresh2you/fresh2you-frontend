const ProductCard = ({ product }) => (
  <div className="bg-custom-white shadow-md rounded-lg overflow-hidden w-full max-w-xs">
    <div className="flex justify-center items-center w-full h-48">
      <img src={product.img} alt={product.name} className="object-contain w-48 h-48" />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <h3 className="text-xl text-custom-gray-dark">
        {product.seller}, <span className="text-custom-green font-semibold">{product.price} 원</span>
      </h3>
      <button className="mt-4 w-full bg-custom-green text-white py-2 rounded-lg hover:bg-custom-green-hover transition">
        구매하기
      </button>
    </div>
  </div>
);
export default ProductCard;
