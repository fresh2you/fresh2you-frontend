import { useEffect } from "react";
import ProductInfo from "./components/details/ProductInfo";
import ProductDetailsSection from "@/pages/product/components/details/ProductDetailSection";
import ProductDetailSkeleton from "./components/skeletons/ProductDetailSkeleton";
import { useFetchProductById } from "./hooks/useFetchProductById";
import ItemNotFound from "./components/details/ItemNotFound";
import useHeaderProps from "../../hooks/useHeaderProps";

const ProductDetailPage = () => {
  const { fetchedProductById: product, isLoading, isError } = useFetchProductById();
  useHeaderProps("", "../", false);

  return (
    <div
      className="flex flex-col items-center min-h-screen text-custom-black px-4 mobile:w-full 
    desktop-sm:min-w-[549px] desktop-sm: max-w-[850px]"
    >
      <div className="flex flex-col w-full pt-2 max-w-[560px]">
        {isLoading && <ProductDetailSkeleton />}

        {!isLoading && !isError && product && (
          <>
            <ProductInfo product={product} />
            <ProductDetailsSection description={product?.description} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
