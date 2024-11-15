import React from "react";
import { useMyProductsPageLogics } from "@/pages/mypage/myProducts/hooks/useMyProductsPageLogics";
import WideProductBox from "@/components/WideProductBox";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg";
import LoadingSpinner from "@/components/LoadingSpinner";

const MyProductList = () => {
  const { loadMoreRef, myProducts, hasNextPage, isFetchingNextPage, isLoading, isError, error, deleteProduct } =
    useMyProductsPageLogics();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>에러가 발생했습니다. 새로고침해주세요</div>;

  return (
    <section className="w-full">
      {!myProducts?.pages[0].data.pageSize ? (
        <div className="flex flex-col items-center justify-center h-96">
          <h3 className="font-bold text-custom-h3">상품이 없습니다.</h3>
          <Link
            to="/product/register"
            className="flex items-center gap-1 p-2 mt-2 rounded hover:bg-custom-green-hover hover:text-white"
          >
            제품 등록하러 가기 <ChevronRightIcon className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        myProducts.pages.map((group) => {
          const productList = group?.data?.productList;
          const pageNumber = group?.data?.pageNumber;

          if (!productList?.length) return null;

          return (
            <React.Fragment key={`page-${pageNumber}`}>
              {productList.map((product) => (
                <WideProductBox
                  key={`product-${product.productId}`}
                  item={product}
                  hasOption={true}
                  editCallback={() => {
                    console.log("edit", product.productId);
                  }}
                  deleteCallback={() => {
                    deleteProduct(product.productId);
                  }}
                />
              ))}
            </React.Fragment>
          );
        })
      )}

      {hasNextPage && (
        <div ref={loadMoreRef} className="flex items-center justify-center h-10">
          {isFetchingNextPage && <div>로딩 중...</div>}
        </div>
      )}
    </section>
  );
};

export default MyProductList;
