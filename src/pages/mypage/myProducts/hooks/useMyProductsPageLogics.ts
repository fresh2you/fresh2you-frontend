import productAPI from "@/services/api/productAPI";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

type ProductResponse = Pick<IGetSellingProductResponse, "data">;

export const useMyProductsPageLogics = () => {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const fetchSellingProducts = async (pageParam: number): Promise<ProductResponse> => {
    const PAGE_SIZE = 10;

    const response = await productAPI.getSellingProducts({ page: pageParam, pageSize: PAGE_SIZE });

    return response;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error } =
    useInfiniteQuery<ProductResponse>({
      queryKey: ["posts"],

      queryFn: ({ pageParam = 0 }) => fetchSellingProducts(pageParam as number),

      getNextPageParam: (lastPage) => {
        const currentPage = lastPage.data.pageNumber;
        const totalPages = lastPage.data.totalPageNumber;

        return currentPage < totalPages - 1 ? currentPage + 1 : undefined;
      },
      initialPageParam: 0, // 초기 페이지 매개변수 추가
    });

  useIntersectionObserver({ fetchNextPage, hasNextPage, isFetchingNextPage, loadMoreRef });

  return { loadMoreRef, data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error };
};
