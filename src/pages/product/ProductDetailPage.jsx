import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockProducts } from '../../mockdata/MockData';
import ProductImageSlider from './components/details/ProductImageSlider';
import ProductDescription from './components/details/ProductDescription';
import BackButton from './components/buttons/BackButton';
import ProductInfo from './components/ProductInfo';
import ProductDetailsSection from './components/details/ProductDetailSection';
import ProductDetailSkeleton from './components/skeletons/ProductDetailSkeleton';
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        console.log(loading);
        const productData = mockProducts.products.find((p) => p.product_id === parseInt(id));
        setProduct(productData);
      } catch (error) {
        console.error('Failed to fetch product:', error);
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
    <div className="flex flex-col items-center min-h-screen text-custom-black px-4 md:px-8 lg:px-20">
      <div className="w-full max-w-4xl py-8 flex flex-col">
        <div className="flex justify-start mb-4">
          <BackButton />
        </div>
        <ProductInfo product={product} />
        <ProductDetailsSection />
      </div>
    </div>
  );
};

export default ProductDetailPage;
