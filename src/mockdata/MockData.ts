import { ProductCardProps } from '../pages/home/component/ProductCard';
import itemImg1 from '../assets/img/fruits/Strawberry.png';
import itemImg2 from '../assets/img/fruits/avocado.png';
import itemImg3 from '../assets/img/fruits/banana.png';
import itemImg4 from '../assets/img/fruits/berry.png';
import itemImg5 from '../assets/img/fruits/blueberry.png';
import itemImg6 from '../assets/img/fruits/grape.png';

const images = [itemImg1, itemImg2, itemImg3, itemImg4, itemImg5, itemImg6];

export const mockProducts: { type: string; products: ProductCardProps[] } = {
  type: 'user_based',
  products: Array.from({ length: 1000 }, (_, i) => ({
    product_id: i + 1,
    name: `상품명 ${i + 1}`,
    seller: '판매자명',
    description: '상품에 대한 간단 설명입니다',
    price: 10000,
    img: images[i % images.length],
  })),
};
