import { useState, useEffect, useCallback, useRef } from 'react';
import ProductCard from './components/ProductCard';
import { mockProducts } from '../../mockdata/MockData';
import ProductCardSkeleton from './components/skeletons/ProductCardSkeleton';
import CategoryButtons from './components/buttons/CategoryButtons';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 10;

  const observer = useRef();

  const fetchProducts = useCallback(
    async (pageNumber) => {
      if (!hasMore) return;

      setLoading(true);
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const newProducts = mockProducts.products.slice(startIndex, startIndex + itemsPerPage);

      if (newProducts.length < itemsPerPage) {
        setHasMore(false);
      }

      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setLoading(false);
    },
    [itemsPerPage, hasMore],
  );

  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  useEffect(() => {
    fetchProducts(pageNumber);
  }, [pageNumber, fetchProducts]);

  if (loading || products.length === 0) {
    return (
      <div className="mx-auto py-8 text-custom-black max-w-7xl px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-custom-green">갓 수확했어요!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center">
          {Array.from({ length: itemsPerPage }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0 && !loading) {
    return <div className="text-center mt-20">등록된 상품이 없습니다.</div>;
  }

  return (
    <div className="mx-auto py-8 text-custom-black max-w-7xl px-4">
      <CategoryButtons />
      <h1 className="text-5xl font-bold text-center my-8 text-custom-green">갓 수확했어요!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center">
        {products.map((product, index) => {
          const key = `${product.product_id}-${index}`;
          if (index === products.length - 1) {
            return <ProductCard ref={lastProductRef} key={key} product={product} />;
          } else {
            return <ProductCard key={key} product={product} />;
          }
        })}
      </div>
      {loading && <div className="text-center mt-4">더 많은 상품을 불러오는 중입니다...</div>}
    </div>
  );
};

export default ProductsPage;
