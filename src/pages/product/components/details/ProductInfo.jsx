import Button from "../buttons/Button";
import { formatCurrency } from "../../../../utils/commonUtils";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { productAtom } from "@/stores/jotaiSample";
const ProductInfo = ({ inChat }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useAtom(productAtom);
  let className1 = "";
  let className2 = "";
  let className3 = "";
  let className4 = "";
  if (inChat) {
    className1 = "top-[59px] px-4 py-2 fixed bg-white w-full border-b opacity-95";
    className2 = "w-[80px] h-[80px]";
    className3 = "text-base";
    className4 = "text-lg";
  } else {
    className1 = "2xs:flex-col 2xs:gap-y-2";
    className2 = "lg:max-w-[180px] md:max-w-[160px] max-w-[140px] xs:max-w-[120px]";
    className3 = "text-2xl md:mb-1 xs:text-xl";
    className4 = "text-xl mb-1";
  }
  if (!product) {
    return <div className="text-center mt-20">No product data available.</div>;
  }

  return (
    <div className={`flex items-center gap-x-4 ${className1}`}>
      <div className="flex justify-center items-center">
        <img src={product.img} alt={product.name} className={`object-contain border rounded-sm ${className2}`} />
      </div>
      <div className="flex flex-col">
        <h1 className={`font-bold ${className3}`}>{product.name}</h1>
        <p className="text-custom-gray-dark md:mb-1">{product.seller}</p>
        <p className={`${className4} text-custom-green font-semibold`}>{formatCurrency(product.price)} 원</p>
        {!inChat && (
          <div className="flex gap-2">
            <Button
              className="bg-custom-green text-white hover:bg-custom-green-hover whitespace-nowrap text-base md:text-lg xs:text-sm"
              text="구매하기"
              onClick={() => navigate(`/purchase/${product.product_id}`)}
            />
            <Button
              className="bg-custom-gray-light text-custom-black hover:bg-custom-gray-dark whitespace-nowrap text-base md:text-lg xs:text-sm"
              text="협상하기"
              onClick={() => {
                setProduct(product);
                navigate(`/chatting/${product.product_id}`);
              }}
            />
          </div>
        )}
      </div>
      {inChat && (
        <Button
          className="bg-custom-green text-white hover:bg-custom-green-hover whitespace-nowrap 
          text-base md:text-lg xs:text-sm absolute right-4 rounded-md"
          text="구매하기"
          onClick={() => navigate(`/purchase/${product.product_id}`)}
        />
      )}
    </div>
  );
};

export default ProductInfo;
