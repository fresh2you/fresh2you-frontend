import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import ProductInfo from "../product/components/details/ProductInfo";
import MessageList from "./components/MessageList";
import ChatFooter from "./components/ChatFooter";
import "../../styles/styles.css";
import ArrowLeftIcon from "../../assets/icons/arrow-left-sm.svg";
import ArrowRightIcon from "../../assets/icons/arrow-right-sm.svg";
import useScrollToBottom from "./hooks/useScrollToBottom";
import { chatService } from "./api/stomp";
import { instance } from "@/instance";
import { fetchChatMessages } from "./api/chatApis";
import useMyPageLogics from "../mypage/mypage/hooks/useMyPageLogics";
const ChatPage = () => {
  const { id: chatRoomId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state ? location.state : [];

  const { userInfo } = useMyPageLogics();
  const userId = userInfo?.userId;

  const chatInfo = {
    chatRoomId: chatRoomId,
    userId: userId || undefined,
    chatPartnerId: 80, // chatPartnerId
  };

  const [messages, setMessages] = useState([]);
  const [showProductInfo, setShowProductInfo] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (use) fetchChatMessages(userId);
  }, [chatRoomId]);

  // WebSocket 연결
  useEffect(() => {
    const handleMessageReceived = (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    const handleConnect = () => {
      console.log("Connected to chat room");
    };

    const handleError = (error) => {
      console.error("WebSocket error:", error);
    };

    chatService.connect(chatRoomId, handleMessageReceived, handleConnect, handleError);

    return () => {
      chatService.disconnect(() => {
        console.log("Disconnected from chat room");
      });
    };
  }, [chatRoomId]);

  useScrollToBottom(messagesEndRef, [messages]);

  const toggleProductInfo = () => {
    setShowProductInfo((prev) => !prev);
  };

  return (
    <div className="relative w-full mx-auto bg-white text-custom-black">
      <div
        className={`fixed opacity-95 left-4 max-w-[450px] rounded-md mr-4 p-1.5 transition-transform 
          duration-300 overflow-hidden flex ${showProductInfo ? "translate-x-0" : "-translate-x-[96%]"}
          ${Object.keys(product).length > 0 ? "bg-gray-100 border" : "bg-white border-none"}`}
      >
        {Object.keys(product).length > 0 && (
          <div className="flex items-start">
            <ProductInfo inChat={true} product={product} noBtn={false} className="mr-12" />
            <button
              onClick={toggleProductInfo}
              className="fixed top-0 bottom-0 right-0 p-0 bg-gray-200 rounded-none custom-focus-light"
            >
              {showProductInfo ? <ArrowLeftIcon /> : <ArrowRightIcon />}
            </button>
          </div>
        )}
      </div>
      {messages.length ? (
        <div className="w-full h-screen max-w-lg pt-2 mx-auto rounded tablet-sm:border mobile:pb-16">
          <MessageList messages={messages} />
          <div ref={messagesEndRef} />
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-custom-p">채팅을 시작해 보세요!</p>
        </div>
      )}
      <ChatFooter chatInfo={chatInfo} navigate={navigate} setMessages={setMessages} />
    </div>
  );
};

export default ChatPage;
