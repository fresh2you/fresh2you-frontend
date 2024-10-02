import Button from "../buttons/Button";
import { createChatRoom } from "@/pages/chat/api/chatApis";
import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";
import { toast } from "react-toastify";

const ProductActionButtons = ({ product, navigate }) => {
  const { userInfo } = useMyPageLogics();
  const handleNegotiation = async () => {
    try {
      const params = {
        buyerId: userInfo.userId,
        sellerId: 50, // 닉네임 들어갈 곳
        productId: product.productId,
        categoryId: null,
      };
      const response = await createChatRoom(params);
      const chatRoomId = response.data.chatRoomId;

      navigate(`/chatting/${chatRoomId}`, { state: { ...product } });
    } catch (error) {
      if (error.response.data.code === "2006") {
        navigate("/chatting");
      }
    }
  };

  return (
    <div className="flex gap-2 mobile:mt-1 tablet-sm:mt-2">
      <Button
        className="bg-custom-green text-white hover:bg-custom-green-hover"
        text="구매하기"
        onClick={() => navigate(`/purchase/${product.productId}`)}
      />
      <Button
        className="bg-custom-gray-light text-custom-black hover:bg-custom-gray-dark"
        text="협상하기"
        onClick={handleNegotiation}
      />
    </div>
  );
};

export default ProductActionButtons;
