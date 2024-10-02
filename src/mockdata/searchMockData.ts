import { ProductCardProps } from "../pages/home/component/ProductCard";
import { atom } from "jotai";

export interface SearchedItemsTypes extends ProductCardProps {
  updated_at: string;
  locale: string;
}

export const searchedItemsAtom = atom<SearchedItemsTypes[]>([]);

export const mockSearchedItems: SearchedItemsTypes[] = [
  {
    productId: 1,
    productName: "상품명 1",
    sellerName: "판매자명",
    description: "상품에 대한 간단 설명입니다",
    price: 10000,
    locale: "지역명 1",
    productImage: undefined,
    updated_at: "1시간전",
  },
  {
    productId: 2,
    productName: "상품명 2",
    sellerName: "판매자명",
    description: "상품에 대한 간단 설명입니다",
    price: 10000,
    locale: "지역명 2",
    productImage: undefined,
    updated_at: "1시간전",
  },
  {
    productId: 3,
    productName: "상품명 3",
    sellerName: "판매자명",
    description: "상품에 대한 간단 설명입니다",
    price: 10000,
    locale: "지역명 3",
    productImage: undefined,
    updated_at: "1시간전",
  },
  {
    productId: 4,
    productName: "상품명 4",
    sellerName: "판매자명",
    description: "상품에 대한 간단 설명입니다",
    price: 10000,
    locale: "지역명 4",
    productImage: undefined,
    updated_at: "1시간전",
  },
  {
    productId: 5,
    productName: "상품명 5",
    sellerName: "판매자명",
    description: "상품에 대한 간단 설명입니다",
    price: 10000,
    locale: "지역명 5",
    productImage: undefined,
    updated_at: "1시간전",
  },
];
