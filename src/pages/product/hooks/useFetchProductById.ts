import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { useParams } from "react-router-dom";

export const useFetchProductById = () => {
  const { id } = useParams();

  const {
    data: fetchedProductById,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["fetchedProductById", id],
    queryFn: async () => {
      if (!id) return;
      const { data: product } = await api.product.getProductDetails(Number(id));
      return product as IProductList;
    },
    enabled: id !== undefined,
    staleTime: 600 * 1000,
    retry: 0,
  });

  return { fetchedProductById, isLoading, isError };
};
