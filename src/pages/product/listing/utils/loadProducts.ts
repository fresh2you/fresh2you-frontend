import productAPI from "@/services/api/productAPI";

export const loadProducts = async (
  pageNumber: number,
  selectedCategoryId: number | undefined,
  itemsPerPage: number,
  hasMore: boolean,
  setProducts: React.Dispatch<React.SetStateAction<IProductList[]>>,
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (!hasMore) return;
  const { data: newProducts } = await productAPI.fetchProducts({
    categoryId: selectedCategoryId,
    page: pageNumber,
    size: itemsPerPage,
  });
  if (newProducts.productList.length === 0 || newProducts.productList.length < itemsPerPage) {
    setHasMore(false);
  }
  setProducts((prev) => [...prev, ...newProducts.productList]);
};
