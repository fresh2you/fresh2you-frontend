import { useQuery } from "@tanstack/react-query";
import { instance } from "@/instance";
import { ProductCardProps } from "@/pages/home/component/ProductCard";

const useLikeListPageLogics = () => {
  const { data: mockProducts } = useQuery({
    queryKey: ["mockProducts"],
    queryFn: async () => {
      const { data: result } = await instance.get<ProductCardProps[]>("/mockProducts");

      return result;
    },
    enabled: true,
    staleTime: 60 * 1000,
  });

  return { mockProducts };
};

export default useLikeListPageLogics;
