import { useQuery } from "@tanstack/react-query";
import productAPI from "@/services/api/productAPI";

const useFetchLikedProducts = () => {
  const { data: likedProducts } = useQuery({
    queryKey: ["likedProducts"],
    queryFn: async () => {
      const { data: result } = await productAPI.getLikeProducts();

      return result.productList;
    },
    staleTime: 600 * 1000,
    retry: 0,
  });

  const likedProductIds = likedProducts?.map((product: IProductList) => product.productId) || [];

  return likedProductIds;
};

export default useFetchLikedProducts;
