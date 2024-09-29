import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./skeletons/ProductCardSkeleton";

const ProductList = ({ products, lastProductRef, itemsPerPage }) => {
  return (
    <>
      {!products.length ? (
        <div className="mx-auto text-center text-custom-p mt-20">상품 정보가 없습니다.</div>
      ) : (
        <div
          className="grid grid-cols-2 tablet:grid-cols-3 desktop-sm:grid-cols-4 mobile:gap-y-3
          tablet:gap-y-6 tablet:gap-x-3 justify-items-center"
        >
          {products.map((product, index) => {
            const key = `${product.product_id}-${index}`;
            return (
              <div ref={index === products.length - 1 ? lastProductRef : null} key={key}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ProductList;
