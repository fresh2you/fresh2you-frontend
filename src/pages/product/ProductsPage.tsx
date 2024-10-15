import { useState, useEffect, useCallback } from "react";
import CategoryButtons from "./components/buttons/CategoryButtons";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import ProductList from "./components/ProductList";
import "@/styles/styles.css";
import PlusIcon from "../../assets/icons/plus.svg";
import { Link } from "react-router-dom";
import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";
import { api } from "@/services/api";

const ProductsPage = () => {
  const [products, setProducts] = useState<IProductList[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState<undefined | number>(undefined);
  const itemsPerPage = 12;

  const loadProducts = useCallback(
    async (pageNumber: number) => {
      if (!hasMore) return;
      setLoading(true);
      try {
        const { data: newProducts } = await api.product.fetchProducts({
          categoryId: selectedCategoryId,
          page: pageNumber,
          size: itemsPerPage,
        });

        console.log(newProducts);

        if (newProducts.productList.length === 0 || newProducts.productList.length < itemsPerPage) {
          setHasMore(false);
        }

        setProducts((prev) => [...prev, ...newProducts.productList]);
        //setProducts([...products, ...newProducts.productList]);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    },
    [hasMore, selectedCategoryId],
  );

  const { lastProductRef } = useInfiniteScroll(loading, hasMore, setPageNumber);

  const handleCategoryChange = (categoryId: number) => {
    if (selectedCategoryId === categoryId) return;
    setSelectedCategoryId(categoryId);
    setProducts([]);
    setPageNumber(0);
    setHasMore(true);
  };

  useEffect(() => {
    loadProducts(pageNumber);
  }, [pageNumber, loadProducts]);

  const { userInfo } = useMyPageLogics();
  const isSeller = userInfo?.isSeller;

  return (
    <div className="mx-auto py-2.5 text-custom-black product-page">
      <CategoryButtons handleCategoryChange={handleCategoryChange} />
      <h2 className="my-6 font-bold text-center text-custom-green text-custom-h2">갓 수확했어요!</h2>
      <ProductList products={products} lastProductRef={lastProductRef} itemsPerPage={itemsPerPage} />

      {isSeller && (
        <Link
          className="fixed mobile:bottom-20 tablet:bottom-4 mobile:right-4 p-2.5 bg-custom-green text-white rounded-full 
      shadow-lg hover:bg-custom-green-hover z-50"
          to={"/product/register"}
        >
          <PlusIcon className="mobile:w-7 mobile:h-7 tablet:w-8 tablet:h-8" />
        </Link>
      )}
    </div>
  );
};

export default ProductsPage;
