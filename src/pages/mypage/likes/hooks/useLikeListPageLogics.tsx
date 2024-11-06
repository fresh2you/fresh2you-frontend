import { useQuery, useQueryClient } from "@tanstack/react-query";
import productAPI from "@/services/api/productAPI";
import { toast } from "react-toastify";

const useLikeListPageLogics = () => {
  const queryClient = useQueryClient();

  const { data: likedProducts } = useQuery({
    queryKey: ["likedProducts"],
    queryFn: async () => {
      try {
        const { data: result } = await productAPI.getLikeProducts();

        return result.productList;
      } catch (error) {
        toast.error("에러가 발생했습니다.");
        console.debug(error);
      }
    },
    enabled: true,
    staleTime: 60 * 1000,
  });

  const cancelLikeProduct = (productId: number) => async () => {
    try {
      const { success: result } = await api.product.cancelLikeProduct(productId);

      if (result) return queryClient.invalidateQueries({ queryKey: ["likedProducts"] });
      return result;
    } catch (error) {
      toast.error("에러가 발생했습니다.");
      console.debug(error);
    }
  };

  return { likedProducts, cancelLikeProduct };
};

export default useLikeListPageLogics;
