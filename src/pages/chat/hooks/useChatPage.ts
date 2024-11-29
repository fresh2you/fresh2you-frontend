import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import mockData from "@/mockData/db.json";
import createStompClient from "@/pages/product/detail/utils/createStompClient";
import { Client } from "@stomp/stompjs";

export const useChatPage = () => {
  const { id: chatRoomId } = useParams<{ id: string }>();
  const [messages, setMessages] = useState<Message[]>(mockData.chatMessages[0].messages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [stompClient, setStompClient] = useState<Client | undefined>(undefined);

  useEffect(() => {
    if (!chatRoomId) return;

    const client = createStompClient({
      onConnectCallback: (client) => {
        client.subscribe(`/sub/chat/room${chatRoomId}`, (message) => {
          const newMessage = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        });
      },
      onErrorCallback: (error) => {
        console.error("STOMP Connection Error: ", error);
      },
    });

    setStompClient(client);
    client.activate();

    return () => {
      client.deactivate();
    };
  }, [chatRoomId]);

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
    stompClient,
  };
};
