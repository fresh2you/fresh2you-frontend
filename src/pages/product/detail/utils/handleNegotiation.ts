import { NavigateFunction } from "react-router-dom";
import chatAPI from "@/services/api/chatAPI";
import { toast } from "react-toastify";

const handleNegotiation = async (product: IProductList, navigate: NavigateFunction, refetch: () => void) => {
  try {
    const response = await chatAPI.createChatRoom({
      type: "PRIVATE",
      name: "",
      productId: product.productId,
      loginMemberType: "PARTICIPANT",
    });

    const chatRoomId = response.data?.chatRoomId;

    if (!chatRoomId) {
      throw new Error("Chat room creation failed.");
    }

    sessionStorage.setItem(String(chatRoomId), JSON.stringify({ product: product }));
    refetch();
    navigate(`/chatting/${chatRoomId}`);
  } catch {
    toast.error("예기치 못한 오류가 발생했습니다. 잠시 후 다시 시도해 주세요");
  }
};

export default handleNegotiation;
