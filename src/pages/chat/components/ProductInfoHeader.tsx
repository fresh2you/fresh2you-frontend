import ProductInfo from "@/pages/product/detail/components/ProductInfo";
import ArrowLeftIcon from "@/assets/icons/arrow-left-sm.svg";
import InfoIcon from "@/assets/icons/chat-info.svg";
import { handleToggleProductInfo } from "../utils/chatHandlers";
import { useState } from "react";
import useStoredProductInfo from "../hooks/useStoredProductInfo";

interface ProductInfoHeaderProps {
  product: Product;
}

const ProductInfoHeader: React.FC<ProductInfoHeaderProps> = ({ product }) => {
  const [showProductInfo, setShowProductInfo] = useState<boolean>(() =>
    JSON.parse(sessionStorage.getItem("showProductInfo") || "true"),
  );
  useStoredProductInfo(showProductInfo);
  return (
    <div
      className={`w-11/12 absolute overflow-hidden left-0 z-20 top-6 py-1.5 pl-2 transition-transform flex opacity-85
      ${
        showProductInfo
          ? "translate-x-0 bg-gray-100 border rounded-r shadow-md "
          : "mobile:-translate-x-[calc(100%-51px)] bg-transparent rounded-br-xl items-center shadow-none"
      }`}
    >
      <ProductInfo inChat product={product} className="mr-12" />
      <button
        onClick={() => handleToggleProductInfo(setShowProductInfo)}
        className={`absolute z-20 p-0 bg-gray-200 custom-focus-light 
        ${
          showProductInfo
            ? "right-0 rounded-r-none h-[calc(100%-8px)]"
            : "bottom-0 flex items-center justify-center w-12 h-12 rounded-l-none opacity-75 top-1 right-1"
        }`}
      >
        {showProductInfo ? (
          <ArrowLeftIcon className="w-8 h-8 transition-colors hover:text-custom-gray-dark" alt="상품 정보 닫기" />
        ) : (
          <InfoIcon className="justify-center transition-colors hover:text-custom-gray-dark" alt="상품 정보 보기" />
        )}
      </button>
    </div>
  );
};

export default ProductInfoHeader;
