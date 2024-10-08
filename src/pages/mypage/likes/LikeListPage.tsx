import { pageLayoutHeaderProps } from "@/stores/mypage";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import ProductBox from "@/components/ProductBox";
import useLikeListPageLogics from "@/pages/mypage/likes/hooks/useLikeListPageLogics";

const LikeListPage = () => {
  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);
  const { mockProducts } = useLikeListPageLogics();

  useEffect(() => {
    setHeaderProps({
      title: "찜 목록",
      hasConfirm: false,
      backRoute: "/mypage",
    });
  }, [setHeaderProps]);

  return (
    <div className="flex flex-col w-full h-full p-4">
      {!mockProducts && <div>찜한 상품이 없습니다</div>}

      {/* TODO: API명세서에 따른 데이터 타입 정의로 맞출 예정 */}
      {mockProducts && mockProducts.map((v) => <ProductBox key={v.product_id} item={v} />)}
    </div>
  );
};

export default LikeListPage;
