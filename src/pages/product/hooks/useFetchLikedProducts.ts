import { useQuery } from "@tanstack/react-query";
import productAPI from "@/services/api/productAPI";

const useFetchLikedProducts = () => {
  const { data } = useQuery({
    queryKey: ["likedProducts"],
    queryFn: async () => {
      const { data } = await productAPI.getLikeProducts();
      return data;
    },
    staleTime: 600 * 1000,
    retry: 0,
  });
  const likedProductIds = data?.productList.map((product: IProductList) => product.productId) || [];

  return likedProductIds;
};

export default useFetchLikedProducts;
