import { useEffect, useCallback } from "react";
import { useAtom } from "jotai";
import useInfiniteScroll from "./useInfiniteScroll";
import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";
import { loadProducts as fetchProducts } from "../utils/loadProducts";
import { productsAtom, pageNumberAtom, hasMoreAtom, selectedCategoryIdAtom } from "../atom/atom";

const useProductsPageLogic = () => {
  const [, setProducts] = useAtom(productsAtom);
  const [pageNumber, setPageNumber] = useAtom(pageNumberAtom);
  const [hasMore, setHasMore] = useAtom(hasMoreAtom);
  const [selectedCategoryId] = useAtom(selectedCategoryIdAtom);
  const itemsPerPage = 12;

  const loadProducts = useCallback(
    (pageNumber: number) => {
      fetchProducts(pageNumber, selectedCategoryId, itemsPerPage, hasMore, setProducts, setHasMore);
    },
    [hasMore, selectedCategoryId],
  );

  const { lastProductRef } = useInfiniteScroll(hasMore, setPageNumber);

  useEffect(() => {
    loadProducts(pageNumber);
  }, [pageNumber, selectedCategoryId]);

  return {
    lastProductRef,
    isSeller: useMyPageLogics().userInfo?.isSeller,
    itemsPerPage,
  };
};

export default useProductsPageLogic;
