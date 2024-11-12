import { useEffect, useState } from "react";
import useFetchLikedProducts from "./useFetchLikedProducts";

const useLikedStatus = (productId: number | undefined): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const likedProductIds = useFetchLikedProducts();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(likedProductIds?.includes(productId));
  }, [likedProductIds, productId]);

  return [isLiked, setIsLiked];
};

export default useLikedStatus;
