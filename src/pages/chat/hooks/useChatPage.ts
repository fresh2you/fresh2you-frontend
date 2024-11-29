import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import mockData from "@/mockData/db.json";

export const useChatPage = () => {
  const { id: chatRoomId } = useParams<{ id: string }>();
  const [messages, setMessages] = useState<Message[]>(mockData.chatMessages[0].messages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  let product;
  if (chatRoomId) {
    const storedProduct = sessionStorage.getItem(chatRoomId);
    if (storedProduct) {
      const parsedData = JSON.parse(storedProduct);
      product = parsedData?.product;
    } else {
      product = undefined;
    }
  } else {
    product = undefined;
  }

  return {
    chatRoomId,
    product,
    messages,
    setMessages,
    messagesEndRef,
  };
};
