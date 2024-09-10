import Banner from './component/Banner';
import { recommendedProducts } from '../../mockdata/homeMockData';

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Banner title="이런 상품은 어떠세요?" products={recommendedProducts.products} />
      <Banner title="이런 상품은 어떠세요?" products={recommendedProducts.products} />
    </div>
  );
};

export default HomePage;
