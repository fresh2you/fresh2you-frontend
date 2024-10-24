import { useState } from "react";
import { useAtom } from "jotai";
import { productsAtom, pageNumberAtom, hasMoreAtom, selectedCategoryIdAtom } from "../atom/atom";

export const useCategoryLogic = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [, setProducts] = useAtom(productsAtom);
  const [, setPageNumber] = useAtom(pageNumberAtom);
  const [, setHasMore] = useAtom(hasMoreAtom);
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
