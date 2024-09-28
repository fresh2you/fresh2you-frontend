import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./skeletons/ProductCardSkeleton";

const ProductList = ({ products, lastProductRef, itemsPerPage }) => {
  return (
    <div className="grid grid-cols-2 tablet:grid-cols-3 desktop-sm:grid-cols-4 gap-y-3 tablet:gap-x-12 justify-items-center">
      {!products.length
        ? Array.from({ length: itemsPerPage }).map((_, index) => <ProductCardSkeleton key={index} />)
        : products.map((product, index) => {
            const key = `${product.product_id}-${index}`;
            return (
              <div ref={index === products.length - 1 ? lastProductRef : null}>
                <ProductCard product={product} />
              </div>
            );
          })}
    </div>
  );
};

export default ProductList;
