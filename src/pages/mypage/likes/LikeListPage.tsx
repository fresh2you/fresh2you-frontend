import ProductBox from "@/components/ProductBox";
import useLikeListPageLogics from "@/pages/mypage/likes/hooks/useLikeListPageLogics";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import IconChevronRight from "@/assets/icons/chevron-right.svg";
import useHeaderProps from "@/hooks/useHeaderProps";

const LikeListPage = () => {
  useHeaderProps({
    title: "찜 목록",
    hasConfirm: false,
    backRoute: "/mypage",
  });

  const { likedProducts, cancelLikeProduct } = useLikeListPageLogics();

  return (
    <section className="flex flex-col w-full h-full gap-0 py-0">
      {(!likedProducts || likedProducts.length === 0) && (
        <div className="flex flex-col items-center gap-4 mt-4 text-xl font-bold">
          <h2 className="font-medium text-custom-h2">찜한 상품이 없습니다.</h2>
          <Link to="/product" className="flex items-center hover:text-custom-green">
            <span>상품 둘러보러 가기</span>
            <IconChevronRight />
          </Link>
        </div>
      )}

      {likedProducts?.map((likedProduct) => (
        <ProductBox
          key={likedProduct.productId}
          item={likedProduct}
          hasOption={true}
          deleteCallback={cancelLikeProduct(likedProduct.productId)}
        />
      ))}

      <ToastContainer />
    </section>
  );
};

export default LikeListPage;
