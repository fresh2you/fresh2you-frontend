import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./skeletons/ProductCardSkeleton";

const ProductList = ({
  products,
  lastProductRef,
  itemsPerPage,
}: {
  products: IProductList[];
  lastProductRef: (node: HTMLDivElement) => void;
  itemsPerPage: number;
}) => {
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    setIsInitialRender(false);
  }, []);

  return (
    <div className="grid grid-cols-2 tablet:grid-cols-3 desktop-sm:grid-cols-4 mobile:gap-y-3 tablet:gap-y-6 tablet:gap-x-3 justify-items-center">
      {isInitialRender
        ? Array.from({ length: itemsPerPage }, (_, index) => <ProductCardSkeleton key={index} />)
        : products.map((product, index) => (
            <div ref={index === products.length - 1 ? lastProductRef : null} key={`${product.productId}-${index}`}>
              <ProductCard product={product} />
            </div>
          ))}
    </div>
  );
};

export default ProductList;
