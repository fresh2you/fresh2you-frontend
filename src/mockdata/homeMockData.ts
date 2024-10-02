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
      productId: 1,
      productName: "상품명 1",
      sellerName: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      productImage: itemImg1,
    },
    {
      productId: 2,
      productName: "상품명 2",
      sellerName: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      productImage: itemImg2,
    },
    {
      productId: 3,
      productName: "상품명 3",
      sellerName: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      productImage: itemImg3,
    },
    {
      productId: 4,
      productName: "상품명 4",
      sellerName: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      productImage: itemImg4,
    },
    {
      productId: 5,
      productName: "상품명 5",
      sellerName: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      productImage: itemImg5,
    },
    {
      productId: 6,
      productName: "상품명 6",
      sellerName: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      productImage: itemImg2,
    },
    {
      productId: 7,
      productName: "상품명 7",
      sellerName: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      productImage: itemImg3,
    },
    {
      productId: 8,
      productName: "상품명 8 ",
      sellerName: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      productImage: itemImg4,
    },
    {
      productId: 9,
      productName: "상품명 9",
      sellerName: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      productImage: itemImg1,
    },
    {
      productId: 10,
      productName: "상품명 10",
      sellerName: "판매자명",
      description: "상품에 대한 간단 설명입니다",
      price: 10000,
      productImage: itemImg6,
    },
  ],
};
