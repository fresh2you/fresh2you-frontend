import { useState } from "react";
import SendIcon from "../../../assets/icons/send.svg";
import ListIcon from ".././.././../assets/icons/list.svg";
import DropDownMenu from "./DropDownMenu";
import "../../../styles/styles.css";
import { chatService } from "../api/stomp";
const ChatFooter = ({ chatInfo, navigate, setMessages }) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const messageBody = {
        chatRoomId: chatInfo.chatRoomId,
        senderId: chatInfo.userId,
        content: inputValue,
      };

      chatService.sendMessage(messageBody);

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          ...messageBody,
          timestamp: new Date().toISOString(),
        },
      ]);

      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return (
    <div className="fixed bottom-0 left-0 flex items-center w-full py-2 bg-white border-t tablet:justify-center mobile:justify-evenly tablet:gap-9">
      <button className="p-0 bg-white custom-focus" onClick={toggleDropdown}>
        <ListIcon className="w-8 h-8 tablet-sm:w-9 tablet:h-9" />
      </button>
      {isOpen && <DropDownMenu action={setIsOpen} navigate={navigate} chatInfo={chatInfo} />}
      <input
        type="text"
        value={inputValue}
        className="w-8/12 p-2 bg-gray-200 rounded custom-focus-light"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="p-0 ml-2 bg-white custom-focus" onClick={handleSendMessage}>
        <SendIcon className="w-7 h-7 tablet-sm:w-9 tablet:h-9" />
      </button>
    </div>
  );
};
export default ChatFooter;
