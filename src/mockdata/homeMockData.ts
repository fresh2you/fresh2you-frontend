import { ProductCardProps } from '../pages/home/component/ProductCard';
import itemImg1 from '../assets/img/fruits/Strawberry.png';
import itemImg2 from '../assets/img/fruits/avocado.png';
import itemImg3 from '../assets/img/fruits/banana.png';
import itemImg4 from '../assets/img/fruits/berry.png';
import itemImg5 from '../assets/img/fruits/blueberry.png';
import itemImg6 from '../assets/img/fruits/grape.png';
export const recommendedProducts: { type: string; products: ProductCardProps[] } = {
  type: 'user_based',
  products: [
    {
      product_id: 1,
      name: '상품명 1',
      seller: '판매자명',
      description: '상품에 대한 간단 설명입니다',
      price: 10000,
      img: itemImg1,
    },
    {
      product_id: 2,
      name: '상품명 2',
      seller: '판매자명',
      description: '상품에 대한 간단 설명입니다',
      price: 10000,
      img: itemImg2,
    },
    {
      product_id: 3,
      name: '상품명 3',
      seller: '판매자명',
      description: '상품에 대한 간단 설명입니다',
      price: 10000,
      img: itemImg3,
    },
    {
      product_id: 4,
      name: '상품명 4',
      seller: '판매자명',
      description: '상품에 대한 간단 설명입니다',
      price: 10000,
      img: itemImg4,
    },
    {
      product_id: 5,
      name: '상품명 5',
      seller: '판매자명',
      description: '상품에 대한 간단 설명입니다',
      price: 10000,
      img: itemImg5,
    },
    {
      product_id: 6,
      name: '상품명 6',
      seller: '판매자명',
      description: '상품에 대한 간단 설명입니다',
      price: 10000,
      img: itemImg2,
    },
    {
      product_id: 7,
      name: '상품명 7',
      seller: '판매자명',
      description: '상품에 대한 간단 설명입니다',
      price: 10000,
      img: itemImg3,
    },
    {
      product_id: 8,
      name: '상품명 8 ',
      seller: '판매자명',
      description: '상품에 대한 간단 설명입니다',
      price: 10000,
      img: itemImg4,
    },
    {
      product_id: 9,
      name: '상품명 9',
      seller: '판매자명',
      description: '상품에 대한 간단 설명입니다',
      price: 10000,
      img: itemImg1,
    },
    {
      product_id: 10,
      name: '상품명 10',
      seller: '판매자명',
      description: '상품에 대한 간단 설명입니다',
      price: 10000,
      img: itemImg6,
    },
  ],
};
