import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { fetchChatMessages } from "../api/chatApis";
import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";
import useScrollToBottom from "./useScrollToBottom";
import mockData from "../../../mockData/db.json";

export const useChatPage = () => {
  const { id: chatRoomId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state || {};
  const { userInfo } = useMyPageLogics();
  const userId = userInfo?.id;

  // const [messages, setMessages] = useState<Chat>(mockData.chatMessages);
  const [showProductInfo, setShowProductInfo] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (userId) {
      fetchChatMessages(userId);
    }
  }, [chatRoomId, userId]);

  useScrollToBottom(messagesEndRef, [messages]);

  const toggleProductInfo = () => setShowProductInfo((prev) => !prev);

  return {
    chatRoomId,
    userId,
    product,
    messages,
    setMessages,
    showProductInfo,
    toggleProductInfo,
    messagesEndRef,
    navigate,
  };
};
