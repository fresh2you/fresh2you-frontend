import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import mockData from "@/mockData/db.json";
import createStompClient from "@/pages/chat/utils/createStompClient";
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
        console.log("연결 성공");
        client.subscribe(`/sub/chat/room/${chatRoomId}`, (message) => {
          console.log("수신 성공");
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

  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    console.log(1, chatRoomId);

    if (chatRoomId) {
      const storedProduct = sessionStorage.getItem(chatRoomId);

      if (storedProduct) {
        const parsedData = JSON.parse(storedProduct);
        setProduct(parsedData?.product);
      } else {
        setProduct(undefined);
      }
    } else {
      setProduct(undefined);
    }
  }, [chatRoomId]);

  return {
    chatRoomId,
    product,
    messages,
    setMessages,
    messagesEndRef,
    stompClient,
  };
};
