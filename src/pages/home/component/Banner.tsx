import ProductCard from "./ProductCard";
import { ProductCardProps } from "./ProductCard";

interface BannerProps {
  title: string;
  products: ProductCardProps[];
}

const Banner = ({ title = "banner title", products = [] }: BannerProps) => {
  return (
    <section className="flex flex-col items-center w-full h-auto gap-4 px-4 py-4">
      <div className="font-bold">{title}</div>

      <div
        className={`grid w-full ${products.length > 5 ? "grid-rows-2" : "grid-rows-1"} gap-4`}
        style={products.length > 5 ? { gridTemplateRows: "1fr 1fr" } : undefined}
      >
        <article className="flex w-full h-auto gap-4 overflow-x-auto desktop:justify-center scrollbar-hide">
          {products.slice(0, 5).map(({ productId, productName, sellerName, description, price, productImage }) => (
            <ProductCard
              key={productId}
              productId={productId}
              productName={productName}
              sellerName={sellerName}
              description={description}
              price={price}
              productImage={productImage}
            />
          ))}
        </article>

        {/* 5개 이상일 경우 아래줄로 보냄 */}
        {products.length > 5 && (
          <article className="flex w-full h-auto gap-4 overflow-x-auto desktop:justify-center scrollbar-hide">
            {products.slice(5).map(({ productId, productName, sellerName, description, price, productImage }) => (
              <ProductCard
                key={productId}
                productId={productId}
                productName={productName}
                sellerName={sellerName}
                description={description}
                price={price}
                productImage={productImage}
              />
            ))}
          </article>
        )}
      </div>
    </section>
  );
};

export default Banner;
