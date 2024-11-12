import { useState } from "react";
import { useAtom, useSetAtom } from "jotai";
import { productsAtom, pageNumberAtom, hasMoreAtom, selectedCategoryIdAtom } from "../../common/atom/atom";

export const useCategoryLogic = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const setProducts = useSetAtom(productsAtom);
  const setPageNumber = useSetAtom(pageNumberAtom);
  const setHasMore = useSetAtom(hasMoreAtom);
  const [selectedCategoryId, setSelectedCategoryId] = useAtom(selectedCategoryIdAtom);

  return {
    selectedCategory,
    setSelectedCategory,
    isOpen,
    setIsOpen,
    setProducts,
    setPageNumber,
    setHasMore,
    selectedCategoryId,
    setSelectedCategoryId,
  };
};
