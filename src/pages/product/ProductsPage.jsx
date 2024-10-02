import { useState, useEffect, useRef, useCallback } from "react";
import ProductCard from "./components/ProductCard";
import { mockProducts } from "../../mockdata/MockData";
import CategoryButtons from "./components/buttons/CategoryButtons";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import ProductList from "./components/ProductList";
import "../../styles/styles.css";
import { fetchProducts } from "./api/productApis";
import { useQueryClient } from "@tanstack/react-query";
import PlusIcon from "../../assets/icons/plus.svg";
import { useNavigate } from "react-router-dom";
const ProductsPage = () => {
  const queryClient = useQueryClient();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState(undefined);
  const itemsPerPage = 12;

  const navigate = useNavigate();
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
    if (selectedCategoryId === categoryId) return;
    setSelectedCategoryId(categoryId);
    setProducts([]);
    setPageNumber(0);
    setHasMore(true);
  };

  useEffect(() => {
    loadProducts(pageNumber);
  }, [pageNumber, loadProducts]);

  const userInfo = queryClient.getQueryData("userInfo"); //need to check
  const isSeller = userInfo ? userInfo.isSeller : false;

  return (
    <div className="mx-auto py-2.5 text-custom-black product-page">
      <CategoryButtons handleCategoryChange={handleCategoryChange} />
      <h2 className="font-bold text-center text-custom-green my-6 text-custom-h2">갓 수확했어요!</h2>
      <ProductList products={products} lastProductRef={lastProductRef} itemsPerPage={itemsPerPage} />
      {isSeller && (
        <button
          className="fixed mobile:bottom-20 tablet:bottom-4 mobile:right-4 p-2.5 bg-custom-green text-white rounded-full 
      shadow-lg hover:bg-custom-green-hover z-50"
          onClick={() => navigate("/product/register")}
        >
          <PlusIcon className="mobile:w-7 mobile:h-7 tablet:w-8 tablet:h-8" />
        </button>
      )}
    </div>
  );
};

export default ProductsPage;
