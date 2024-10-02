import { useState, useEffect, useRef, useCallback } from "react";
import ProductCard from "./components/ProductCard";
import { mockProducts } from "../../mockdata/MockData";
import CategoryButtons from "./components/buttons/CategoryButtons";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import ProductList from "./components/ProductList";
import "../../styles/styles.css";
import { fetchProducts } from "./api/productApis";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState(undefined);
  const itemsPerPage = 12;

  const observer = useRef();

  const loadProducts = useCallback(
    async (pageNumber) => {
      if (!hasMore) return;
      setLoading(true);
      try {
        const newProducts = await fetchProducts(selectedCategoryId, undefined, pageNumber, itemsPerPage);
        if (newProducts.productList.length === 0 || newProducts.productList.length < itemsPerPage) {
          setHasMore(false);
        }
        setProducts([...products, ...newProducts.productList]);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    },
    [hasMore, selectedCategoryId, pageNumber],
  );

  const { lastProductRef } = useInfiniteScroll(loading, hasMore, setPageNumber);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setProducts([]);
    setPageNumber(0);
    setHasMore(true);
  };

  useEffect(() => {
    loadProducts(pageNumber);
  }, [pageNumber, loadProducts]);
  console.log(products);
  return (
    <div className="mx-auto py-2.5 text-custom-black product-page">
      <CategoryButtons handleCategoryChange={handleCategoryChange} />
      <h2 className="font-bold text-center mb-6 text-custom-green mt-0 text-custom-h2">갓 수확했어요!</h2>
      <ProductList products={products} lastProductRef={lastProductRef} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default ProductsPage;
