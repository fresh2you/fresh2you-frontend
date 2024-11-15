import useHeaderProps from "@/hooks/useHeaderProps";
import MyProductList from "@/pages/mypage/myProducts/components/MyProductList";

const MyProductsPage = () => {
  useHeaderProps({
    title: "내 판매 상품 목록",
    hasConfirm: false,
    backRoute: "/mypage",
  });

  return (
    <div className="w-full h-full">
      <MyProductList />
    </div>
  );
};

export default MyProductsPage;
