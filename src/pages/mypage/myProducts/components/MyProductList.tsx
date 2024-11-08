// components/InfiniteScrollList.tsx
import React from "react";
import { useMyProductsPageLogics } from "@/pages/mypage/myProducts/hooks/useMyProductsPageLogics";
import WideProductBox from "@/components/WideProductBox";

const MyProductList = () => {
  const { loadMoreRef, data, hasNextPage, isFetchingNextPage, isLoading, isError, error } = useMyProductsPageLogics();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러 발생: {error?.message}</div>;

  //console.log(2, data.pages);

  return (
    <section className="w-full">
      {!data?.pages?.length ? (
        <div>상품이 없습니다.</div>
      ) : (
        data.pages.map((group) => {
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
                    console.log("delete", product.productId);
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
