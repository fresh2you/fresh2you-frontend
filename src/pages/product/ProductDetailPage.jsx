import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductImageSlider from "./components/details/ProductImageSlider";
import ProductDescription from "./components/details/ProductDescription";
import ProductInfo from "./components/details/ProductInfo";
import ProductDetailsSection from "./components/details/ProductDetailSection";
import ProductDetailSkeleton from "./components/skeletons/ProductDetailSkeleton";
import { useFetchProductById } from "./hooks/useFetchProductById";
import useMyPageLogics from "../mypage/mypage/hooks/useMyPageLogics";
import { pageLayoutHeaderProps } from "@/stores/mypage";
import { useSetAtom } from "jotai";
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useFetchProductById(id, setLoading, setProduct);

  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);

  useEffect(() => {
    setHeaderProps({
      title: "",
      hasConfirm: false,
      backRoute: "../",
    });
  }, [setHeaderProps]);

  return (
    <div
      className="flex flex-col items-center min-h-screen text-custom-black px-4 mobile:w-full 
    desktop-sm:min-w-[549px] desktop-sm: max-w-[850px]"
    >
      <div className="flex flex-col mobile:w-11/12 pt-2 tablet-sm:w-3/5 tablet-sm:min-w-[380px]">
        {loading ? (
          <ProductDetailSkeleton />
        ) : (
          <>
            <ProductInfo product={product} />
            <ProductDetailsSection description={product.description} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
