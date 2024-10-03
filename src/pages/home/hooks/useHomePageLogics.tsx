import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";

const useHomePageLogics = () => {
  // 필터별로 쿼리 분리하기
  const { data: recommendProductsByHistory } = useQuery({
    queryKey: ["recommendProductsByHistory"],
    queryFn: async () => {
      const { data: result } = await api.product.getRecommendProductsByHistory();

      return result.products;
    },
    enabled: true,
    staleTime: 60 * 1000,
  });

  const { data: recommendProductsByRandom } = useQuery({
    queryKey: ["recommendProductsByRandom"],
    queryFn: async () => {
      const { data: result } = await api.product.getRecommendProductsByRandom();

      return result.products;
    },
    enabled: true,
    staleTime: 60 * 1000,
  });

  return { recommendProductsByHistory, recommendProductsByRandom };
};

export default useHomePageLogics;
