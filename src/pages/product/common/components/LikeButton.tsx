import { useQueryClient } from "@tanstack/react-query";
import { toggleLike } from "../../listing/utils/productDataUtils";
import FilledHeartIcon from "@/assets/icons/filled-heart.svg";
import HeartIcon from "@/assets/icons/heart.svg";

interface LikeButtonProps {
  productId: number | undefined;
  productName: string | undefined;
  isLiked: boolean;
  setIsLiked: React.Dispatch<React.SetStateAction<boolean>>;
  extraClassName?: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ productId, productName, isLiked, setIsLiked, extraClassName }) => {
  const queryClient = useQueryClient();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (productId) {
      toggleLike(productId, isLiked, setIsLiked, queryClient);
    }
  };

  return (
    <button type="button" onClick={handleClick} className={`${extraClassName} bg-transparent p-0`}>
      {isLiked ? (
        <FilledHeartIcon alt={`${productName} 찜 목록에서 제거`} className="text-red-500 w-7 h-7" />
      ) : (
        <HeartIcon alt={`${productName} 찜 목록에 추가`} className="text-red-500 w-7 h-7" />
      )}
    </button>
  );
};

export default LikeButton;
