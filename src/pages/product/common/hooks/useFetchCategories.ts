import categoryAPI from "@/services/api/categoryAPI";
import { useQuery } from "@tanstack/react-query";

const useFetchCategories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await categoryAPI.getCategories();
      return data.categories as Category[];
    },
    staleTime: 600 * 1000,
    retry: 0,
  });
  return { categories, isLoading };
};

export default useFetchCategories;
