import { ProductCardProps } from "../pages/home/component/ProductCard";
const itemImg1 = "https://i.postimg.cc/L8fL37Hc/avocado.png";
const itemImg2 = "https://i.postimg.cc/jjbNgX2L/banana.png";
const itemImg3 = "https://i.postimg.cc/5tSzZCQp/berry.png";
const itemImg4 = "https://i.postimg.cc/V6st1kjw/blueberry.png";
const itemImg5 = "https://i.postimg.cc/FRPLKXZL/grape.png";
const itemImg6 = "https://i.postimg.cc/sDb5SyRP/strawberry.png";

const images = [itemImg1, itemImg2, itemImg3, itemImg4, itemImg5, itemImg6];

export const mockProducts: { type: string; products: ProductCardProps[] } = {
  type: "user_based",
  products: Array.from({ length: 1000 }, (_, i) => ({
    productId: i + 1,
    productName: `상품명 ${i + 1}`,
    sellerName: "판매자명",
    description: "상품에 대한 간단 설명입니다",
    price: 10000,
    productImage: images[i % images.length],
  })),
};
