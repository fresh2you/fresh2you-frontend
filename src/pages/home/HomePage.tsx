import useHomePageLogics from '@/pages/home/hooks/useHomePageLogics';
import Banner from './component/Banner';

const HomePage = () => {
  const { mockProducts } = useHomePageLogics();

  return (
    <div className="w-full h-full">
      {mockProducts && (
        <>
          <Banner title="이런 상품은 어떠세요?" products={mockProducts} />
          <Banner title="이런 상품은 어떠세요?" products={mockProducts} />
        </>
      )}
    </div>
  );
};

export default HomePage;
