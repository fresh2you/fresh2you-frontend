import { NavigateFunction } from "react-router-dom";

export const handleToggleProductInfo = (setShowProductInfo: React.Dispatch<React.SetStateAction<boolean>>) => {
  setShowProductInfo((prev) => {
    const newState = !prev;
    sessionStorage.setItem("showProductInfo", JSON.stringify(newState));
    return newState;
  });
};

export const handleSendMessage = () => {
  // if (inputValue.trim()) {
  //   const messageBody = {
  //     chatRoomId: chatInfo.chatRoomId,
  //     senderId: chatInfo.userId,
  //     content: inputValue,
  //   };
  //   chatService.sendMessage(messageBody);
  //   setMessages((prevMessages) => [
  //     ...prevMessages,
  //     {
  //       ...messageBody,
  //       timestamp: new Date().toISOString(),
  //     },
  //   ]);
  //   setInputValue("");
  // }
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
