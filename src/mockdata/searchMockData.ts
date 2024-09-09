import { ProductCardProps } from '../pages/home/component/ProductCard';
import { atom } from 'jotai';

export interface SearchedItemsTypes extends ProductCardProps {
  updated_at: string;
  locale: string;
}

export const searchedItemsAtom = atom<SearchedItemsTypes[]>([]);

export const mockSearchedItems: SearchedItemsTypes[] = [
  {
    product_id: 1,
    name: '상품명 1',
    seller: '판매자명',
    description: '상품에 대한 간단 설명입니다',
    price: 10000,
    locale: '지역명 1',
    img: undefined,
    updated_at: '1시간전',
  },
  {
    product_id: 2,
    name: '상품명 2',
    seller: '판매자명',
    description: '상품에 대한 간단 설명입니다',
    price: 10000,
    locale: '지역명 2',
    img: undefined,
    updated_at: '1시간전',
  },
  {
    product_id: 3,
    name: '상품명 3',
    seller: '판매자명',
    description: '상품에 대한 간단 설명입니다',
    price: 10000,
    locale: '지역명 3',
    img: undefined,
    updated_at: '1시간전',
  },
  {
    product_id: 4,
    name: '상품명 4',
    seller: '판매자명',
    description: '상품에 대한 간단 설명입니다',
    price: 10000,
    locale: '지역명 4',
    img: undefined,
    updated_at: '1시간전',
  },
  {
    product_id: 5,
    name: '상품명 5',
    seller: '판매자명',
    description: '상품에 대한 간단 설명입니다',
    price: 10000,
    locale: '지역명 5',
    img: undefined,
    updated_at: '1시간전',
  },
];
