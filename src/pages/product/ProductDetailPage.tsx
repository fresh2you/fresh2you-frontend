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
      className="flex flex-col items-center h-full text-custom-black px-4 mobile:w-full 
    desktop-sm:min-w-[549px] desktop-sm: max-w-[850px]"
    >
      <div className="flex flex-col mobile:w-11/12 pt-2 tablet-sm:w-3/5 tablet-sm:min-w-[380px]">
        {isLoading && <ProductDetailSkeleton />}
        {!isLoading && !isError && product && (
          <>
            <ProductInfo product={product} />
            <ProductDetailsSection description={product?.description} />
          </>
        )}
        {!isLoading && isError && <ItemNotFound />}
      </div>
    </div>
  );
};

export default ProductDetailPage;
