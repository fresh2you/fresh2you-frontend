import { useEffect } from "react";
import CategoryButtons from "./components/buttons/CategoryButtons";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import ProductList from "./components/ProductList";
import "@/styles/styles.css";
import PlusIcon from "../../assets/icons/plus.svg";
import { Link } from "react-router-dom";
import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";
import useProductsPageLogic from "./hooks/useProductsPageLogic";

const ProductsPage = () => {
  const { products, loading, hasMore, pageNumber, setPageNumber, handleCategoryChange, loadProducts, itemsPerPage } =
    useProductsPageLogic();

  const { lastProductRef } = useInfiniteScroll(loading, hasMore, setPageNumber);

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
