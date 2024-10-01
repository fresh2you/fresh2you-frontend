import { useState, useRef, useEffect, useId } from "react";
import data from "../../mockdata/db.json";
import ChatFooter from "./components/ChatFooter";
import ProductInfo from "../product/components/details/ProductInfo";
import MessageList from "./components/MessageList";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/styles.css";
import ArrowLeftIcon from "../../assets/icons/arrow-left-sm.svg";
import ArrowRightIcon from "../../assets/icons/arrow-right-sm.svg";
import useScrollToBottom from "./hooks/useScrollToBottom";
import ArrowDownIcon from "../../assets/icons/arrow-down.svg";
import { useParams } from "react-router-dom";
import useChatMessages from "./hooks/useChatMessages";

const ChatPage = () => {
  const { id: chatRoomId } = useParams();
  const userId = localStorage.getItem("id");
  const location = useLocation();
  const product = location.state ? location.state : [];
  const chatMessages = data.chatMessages;
  const chat = chatMessages.find((chatItem) => chatItem.id == 2);
  const navigate = useNavigate();
  const chatInfo = {
    chatRoomId: chatRoomId,
    userId: userId,
    chatPartnerId: 3,
  };

  const [showProductInfo, setShowProductInfo] = useState(true);
  const messages = useChatMessages(chatRoomId, userId);
  const messagesEndRef = useRef(null);

  const toggleProductInfo = () => {
    setShowProductInfo((prev) => !prev);
  };

  useScrollToBottom(messagesEndRef, [messages]);

  return (
    <div className="bg-white mx-auto text-custom-black relative">
      <div
        className={`fixed opacity-95 left-4 max-w-[450px] border rounded-md mr-4 p-1.5 transition-transform 
          duration-300 border-transparent flex ${showProductInfo ? "translate-x-0" : "-translate-x-[96%]"} bg-gray-100`}
      >
        {product && Object.keys(product).length > 0 && (
          <div className="flex items-start">
            <ProductInfo inChat={true} product={product} noBtn={false} className="mr-12" />
            <button
              onClick={toggleProductInfo}
              className="p-0 bg-gray-200 custom-focus-light fixed right-0 top-0 bottom-0 rounded-none"
            >
              {showProductInfo ? <ArrowLeftIcon /> : <ArrowRightIcon />}
            </button>
          </div>
        )}
      </div>
      {messages.length ? (
        <div className="pt-2 max-w-lg w-full mx-auto tablet-sm:border rounded mobile:pb-16">
          <MessageList messages={chat.messages} />
          <div ref={messagesEndRef} />
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-custom-p">채팅을 시작해 보세요!</p>
        </div>
      )}
      <ChatFooter chatInfo={chatInfo} navigate={navigate} />
    </div>
  );
};

export default ChatPage;
