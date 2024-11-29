import { Client } from "@stomp/stompjs";
import { NavigateFunction } from "react-router-dom";

export const handleToggleProductInfo = (setShowProductInfo: React.Dispatch<React.SetStateAction<boolean>>) => {
  setShowProductInfo((prev) => {
    const newState = !prev;
    sessionStorage.setItem("showProductInfo", JSON.stringify(newState));
    return newState;
  });
};

export const handleSendMessage = (inputValue: string, chatRoomId: string, stompClient: Client, userId: number) => {
  const message = {
    sender: userId,
    content: inputValue,
    timestamp: new Date().toISOString(),
  };

  try {
    stompClient.publish({
      destination: `/pub/chat/send/${chatRoomId}`,
      body: JSON.stringify(message),
    });
  } catch (error) {
    console.error("Failed to send message:", error);
  }
};

export const handleAction = async (
  actionType: string,
  unmount: () => void,
  navigate: NavigateFunction,
  productId?: string,
) => {
  if (actionType === "협상하기") {
    navigate(`/negotiate/${productId}`);
  }
  unmount();
};
export const handleToggleMenu = (setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>, isMenuOpen: boolean) => {
  setIsMenuOpen(!isMenuOpen);
};
