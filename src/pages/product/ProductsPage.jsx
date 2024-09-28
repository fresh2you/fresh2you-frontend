import { useState, useEffect, useRef, useCallback } from "react";
import ProductCard from "./components/ProductCard";
import { mockProducts } from "../../mockdata/MockData";
import CategoryButtons from "./components/buttons/CategoryButtons";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import ProductList from "./components/ProductList";
import "../../styles/styles.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 12;

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

  const { lastProductRef } = useInfiniteScroll(loading, hasMore, setPageNumber);

  useEffect(() => {
    fetchProducts(pageNumber);
  }, [pageNumber, fetchProducts]);

  return (
    <div className="mx-auto py-2.5 text-custom-black product-page">
      <CategoryButtons />
      <h2 className="font-bold text-center mb-6 text-custom-green mt-0 text-custom-h2">갓 수확했어요!</h2>
      <ProductList products={products} lastProductRef={lastProductRef} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default ProductsPage;
