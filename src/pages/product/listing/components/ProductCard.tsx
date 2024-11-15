import { forwardRef } from "react";
import { formatCurrency } from "@/utils/commonUtils";
import { Link } from "react-router-dom";
import useLikedStatus from "../hooks/useLikedStatus";
import LikeButton from "../../common/components/LikeButton";

const fallbackImg = "https://i.postimg.cc/SK4GnMjT/fallback.png";

const ProductCard = forwardRef<HTMLAnchorElement, { product: IProductList }>(({ product }, ref) => {
  const [isLiked, setIsLiked] = useLikedStatus(product.productId);

  return (
    <Link
      ref={ref}
      className="block hover:text-inherit bg-white shadow-lg rounded-md max-w-xs border border-custom-gray-light 
        cursor-pointer pt-2 mobile:w-40 mobile:h-[203px] tablet-sm:w-44 tablet-sm:h-[220px] relative"
      to={`./${product.productId}`}
    >
      <div className="flex items-center justify-center w-full">
        <img
          src={product.imageUrl || fallbackImg}
          alt={product.productName}
          className="object-cover w-2/3 border rounded max-w-24 aspect-square"
        />
      </div>
      <div className="flex flex-col px-4 py-2 text-custom-btn-text mobile:leading-5 tablet-sm:leading-6">
        <h2 className="font-bold break-all">{product.productName}</h2>
        <p className="text-custom-gray-dark">{product.sellerName}</p>
        <p className="font-semibold text-custom-green text-custom-span">{formatCurrency(product.price)} 원</p>
      </div>
      <LikeButton
        productId={product.productId}
        productName={product.productName}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        extraClassName="absolute bottom-2 right-1.5"
      />
    </Link>
  );
});

export default ProductCard;
