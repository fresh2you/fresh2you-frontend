import { useEffect, useState } from "react";
import useFetchLikedProducts from "./useFetchLikedProducts";

const useLikedStatus = (productId: number): [boolean, (status: boolean) => void] => {
  const likedProductIds = useFetchLikedProducts();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(likedProductIds?.includes(productId));
  }, [likedProductIds, productId]);

  return [isLiked, setIsLiked];
};

export default useLikedStatus;
