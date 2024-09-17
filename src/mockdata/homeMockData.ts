import { ProductCardProps } from "../pages/home/component/ProductCard";
const itemImg1 = "https://i.postimg.cc/L8fL37Hc/avocado.png";
const itemImg2 = "https://i.postimg.cc/jjbNgX2L/banana.png";
const itemImg3 = "https://i.postimg.cc/5tSzZCQp/berry.png";
const itemImg4 = "https://i.postimg.cc/V6st1kjw/blueberry.png";
const itemImg5 = "https://i.postimg.cc/FRPLKXZL/grape.png";
const itemImg6 = "https://i.postimg.cc/sDb5SyRP/strawberry.png";

export const recommendedProducts: { type: string; products: ProductCardProps[] } = {
  type: "user_based",
  products: [
    {
      product_id: 1,
      name: "상품명 1",
      seller: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      img: itemImg1,
    },
    {
      product_id: 2,
      name: "상품명 2",
      seller: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      img: itemImg2,
    },
    {
      product_id: 3,
      name: "상품명 3",
      seller: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      img: itemImg3,
    },
    {
      product_id: 4,
      name: "상품명 4",
      seller: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      img: itemImg4,
    },
    {
      product_id: 5,
      name: "상품명 5",
      seller: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      img: itemImg5,
    },
    {
      product_id: 6,
      name: "상품명 6",
      seller: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      img: itemImg2,
    },
    {
      product_id: 7,
      name: "상품명 7",
      seller: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      img: itemImg3,
    },
    {
      product_id: 8,
      name: "상품명 8 ",
      seller: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      img: itemImg4,
    },
    {
      product_id: 9,
      name: "상품명 9",
      seller: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      img: itemImg1,
    },
    {
      product_id: 10,
      name: "상품명 10",
      seller: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      img: itemImg6,
    },
  ],
};
