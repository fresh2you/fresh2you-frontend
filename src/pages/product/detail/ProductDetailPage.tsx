import ProductInfo from "./components/ProductInfo";
import ProductDetailsSection from "@/pages/product/detail/components/ProductDetailSection";
import ProductDetailSkeleton from "../common/skeletons/ProductDetailSkeleton";
import { useFetchProductById } from "../common/hooks/useFetchProductById";
import ItemNotFound from "./components/ItemNotFound";
import useHeaderProps from "@/hooks/useHeaderProps";

const ProductDetailPage = () => {
  const { fetchedProductById: product, isLoading, isError } = useFetchProductById();
  useHeaderProps({
    title: "",
    backRoute: "../",
    hasConfirm: false,
  });

  return (
    <div
      className="flex flex-col items-center h-full text-custom-black px-4 mobile:w-full 
    desktop-sm:min-w-[549px] desktop-sm: max-w-[850px] pb-16"
    >
      <div className="flex flex-col w-full pt-2 max-w-[560px]">
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
