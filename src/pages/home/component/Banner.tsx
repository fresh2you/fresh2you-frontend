import ProductCard from './ProductCard';
import { ProductCardProps } from './ProductCard';

interface BannerProps {
  title: string;
  products: ProductCardProps[];
}

const Banner = ({ title = 'banner title', products = [] }: BannerProps) => {
  console.log(products);

  return (
    <section className="w-full h-auto px-4 py-4 flex flex-col items-center gap-4">
      <div className="font-bold">{title}</div>

      <div className="w-full grid grid-rows-2 gap-4" style={{ gridTemplateRows: '1fr 1fr' }}>
        <article className="w-full h-auto flex lg:justify-center gap-4 overflow-x-auto scrollbar-hide">
          {products.slice(0, 5).map(({ product_id, name, seller, description, price, img }) => (
            <ProductCard
              key={product_id}
              product_id={product_id}
              name={name}
              seller={seller}
              description={description}
              price={price}
              img={img}
            />
          ))}
        </article>

        {/* 5개 이상일 경우 아래줄로 보냄 */}
        {products.length > 5 && (
          <article className="w-full h-auto flex lg:justify-center gap-4 overflow-x-auto scrollbar-hide">
            {products.slice(5).map(({ product_id, name, seller, description, price, img }) => (
              <ProductCard
                key={product_id}
                product_id={product_id}
                name={name}
                seller={seller}
                description={description}
                price={price}
                img={img}
              />
            ))}
          </article>
        )}
      </div>
    </section>
  );
};

export default Banner;
