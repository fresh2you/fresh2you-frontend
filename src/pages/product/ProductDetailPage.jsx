import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockProducts } from "../../mockdata/MockData";
import ProductImageSlider from "./components/details/ProductImageSlider";
import ProductDescription from "./components/details/ProductDescription";
import ProductInfo from "./components/details/ProductInfo";
import ProductDetailsSection from "./components/details/ProductDetailSection";
import ProductDetailSkeleton from "./components/skeletons/ProductDetailSkeleton";
import { useAtom } from "jotai";
import { productAtom } from "@/stores/product";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useAtom(productAtom);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = mockProducts.products.find((p) => p.product_id === parseInt(id));
        setProduct(productData);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  if (!product) {
    return <div className="text-center mt-20">Product not found.</div>;
  }

  return (
    <div
      className="flex flex-col items-center min-h-screen text-custom-black xl:min-w-[620px] lg:w-3/5 lg:max-w-[620px] md:w-3/5 md:min-w-[540px]
     w-4/5 sm:max-w-[540px] mx-auto sm:px-8 py-8 px-10 min-w-[425px]"
    >
      <div className="w-full max-w-4xl flex flex-col">
        <div className="flex justify-start mb-6"></div>
        <ProductInfo />
        <ProductDetailsSection />
      </div>
    </div>
  );
};

export default ProductDetailPage;
