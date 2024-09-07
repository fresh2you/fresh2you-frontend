import Banner from './component/Banner';
import { recommendedProcuts } from '../../mockdata/homeMockData';

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Banner title="이런 상품은 어떠세요?" products={recommendedProcuts.products} />
      <Banner title="이런 상품은 어떠세요?" products={recommendedProcuts.products} />
    </div>
  );
};

export default HomePage;
