import { pageLayoutHeaderProps } from "@/stores/mypage";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import ProductBox from "@/components/ProductBox";
import useLikeListPageLogics from "@/pages/mypage/likes/hooks/useLikeListPageLogics";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const LikeListPage = () => {
  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);
  const { likedProducts } = useLikeListPageLogics();

  useEffect(() => {
    setHeaderProps({
      title: "찜 목록",
      hasConfirm: false,
      backRoute: "/mypage",
    });
  }, [setHeaderProps]);

  return (
    <section className="flex flex-col w-full h-full gap-0 py-0">
      {(!likedProducts || likedProducts.length === 0) && (
        <div className="flex flex-col items-center gap-4 mt-4 text-xl font-bold">
          <h3 className="font-medium">찜한 상품이 없습니다.</h3>
          <Link to="/product" className="hover:text-custom-green">{`상품 둘러보러 가기 ->`}</Link>
        </div>
      )}

      {likedProducts?.map((likedProduct) => (
        <ProductBox key={likedProduct.productId} item={likedProduct} />
      ))}

      <ToastContainer />
    </section>
  );
};

export default LikeListPage;
