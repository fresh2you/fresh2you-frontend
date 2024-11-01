import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { toast } from "react-toastify";

const useLikeListPageLogics = () => {
  const { data: likedProducts } = useQuery({
    queryKey: ["likedProducts"],
    queryFn: async () => {
      try {
        const { data: result } = await api.product.getLikeProducts();

        return result.productList;
      } catch (error) {
        toast.error("에러가 발생했습니다.");
        console.debug(error);
      }
    },
    enabled: true,
    staleTime: 60 * 1000,
  });

  return { likedProducts };
};

export default useLikeListPageLogics;
