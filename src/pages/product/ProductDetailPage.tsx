import { useEffect } from "react";
import ProductInfo from "./components/details/ProductInfo";
import ProductDetailsSection from "@/pages/product/components/details/ProductDetailSection";
import ProductDetailSkeleton from "./components/skeletons/ProductDetailSkeleton";
import { useFetchProductById } from "./hooks/useFetchProductById";
import { pageLayoutHeaderProps } from "@/stores/mypage";
import { useSetAtom } from "jotai";
import useCommon from "@/hooks/useCommon";

const ProductDetailPage = () => {
  const { fetchedProductById: product, isLoading, isError } = useFetchProductById();
  const { goBack } = useCommon();

  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);

  useEffect(() => {
    setHeaderProps({
      title: "",
      hasConfirm: false,
      backRoute: "../",
    });
  }, [setHeaderProps]);

  useEffect(() => {
    // TODO: 에러를 났을 경우 렌더링하는 부분 수정 필요
    if (isError) {
      alert("상품 정보를 불러올 수 없습니다.");
      goBack();
    }
  }, [goBack, isError]);

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
