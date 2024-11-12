import productAPI from "@/services/api/productAPI";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { toast } from "react-toastify";

type ProductResponse = Pick<IGetSellingProductResponse, "data">;

export const useMyProductsPageLogics = () => {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const fetchSellingProducts = async (pageParam: number): Promise<ProductResponse> => {
    const PAGE_SIZE = 10;

    const response = await productAPI.getSellingProducts({ page: pageParam, pageSize: PAGE_SIZE });

    return response;
  };

  const {
    data: myProducts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery<ProductResponse>({
    queryKey: ["myProducts"],

    queryFn: ({ pageParam = 0 }) => fetchSellingProducts(pageParam as number),

    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.data.pageNumber;
      const totalPages = lastPage.data.totalPageNumber;

      return currentPage < totalPages - 1 ? currentPage + 1 : undefined;
    },
    initialPageParam: 0, // 초기 페이지 매개변수 추가
  });

  useIntersectionObserver({ fetchNextPage, hasNextPage, isFetchingNextPage, loadMoreRef });

  const queryClient = useQueryClient();

  const { mutateAsync: deleteProduct } = useMutation({
    mutationFn: async (productId: number) => {
      await productAPI.deleteProduct(productId);

      return toast.success("삭제가 완료되었습니다.");
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProducts"] });
    },

    onError: () => {
      toast.error("제품을 삭제하는 도중 에러가 발생했습니다.");
    },
  });

  return {
    loadMoreRef,
    myProducts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    deleteProduct,
  };
};
