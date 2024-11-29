import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import mockData from "@/mockData/db.json";

export const useChatPage = () => {
  const { id: chatRoomId } = useParams<{ id: string }>();
  const [messages, setMessages] = useState<Message[]>(mockData.chatMessages[0].messages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const product = mockData.chatMessages[0].product; //useQuery 사용해야함

  return {
    chatRoomId,
    product,
    messages,
    setMessages,
    messagesEndRef,
  };
};
