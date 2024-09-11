import { useQuery } from '@tanstack/react-query';
import { instance } from '@/instance';
import { ProductCardProps } from '@/pages/home/component/ProductCard';

const useHomePageLogics = () => {
  // 필터별로 쿼리 분리하기
  const { data: mockProducts } = useQuery({
    queryKey: ['mockProducts'],
    queryFn: async () => {
      const { data: result } = await instance.get<ProductCardProps[]>('/mockProducts');

      return result;
    },
    enabled: true,
    staleTime: 60 * 1000,
  });

  return { mockProducts };
};

export default useHomePageLogics;
