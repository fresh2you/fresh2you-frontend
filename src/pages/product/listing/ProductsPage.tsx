import CategoryButtons from "./components/CategoryButtons";
import ProductList from "./components/ProductList";
import "@/styles/styles.css";
import PlusIcon from "@/assets/icons/plus.svg";
import { Link } from "react-router-dom";
import useProductsPageLogic from "./hooks/useProductPageLogic";
import { useAtomValue } from "jotai";
import { productsAtom } from "../common/atom/atom";

const ProductsPage = () => {
  const { lastProductRef, isSeller, itemsPerPage } = useProductsPageLogic();
  const products = useAtomValue(productsAtom);

  return (
    <section className="mx-auto py-2.5 text-custom-black product-page">
      <CategoryButtons />
      <h1 className="my-6 font-bold text-center text-custom-green text-custom-h2">갓 수확했어요!</h1>
      <ProductList products={products} lastProductRef={lastProductRef} itemsPerPage={itemsPerPage} />
      {isSeller && (
        <Link
          className="fixed mobile:bottom-20 tablet:bottom-4 mobile:right-4 desktop-sm:right-12 p-2.5 bg-custom-green text-white rounded-full 
    shadow-lg hover:bg-custom-green-hover z-50 hover:text-white"
          to={"/product/register"}
          aria-label="상품 등록하기"
        >
          <PlusIcon className="mobile:w-7 mobile:h-7 tablet:w-8 tablet:h-8" alt="상품 등록하기" />
        </Link>
      )}
    </section>
  );
};

export default ProductsPage;
