import React, { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";

const WebSocketComponent: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const clientRef = useRef<Client | null>(null);
  const accessToken = localStorage.getItem("accessToken");

  // WebSocket 연결 및 설정
  useEffect(() => {
    const client = new Client({
      brokerURL: "ws://api.fresh2you.shop/ws", // WebSocket 서버 주소로 변경하세요
      reconnectDelay: 5000, // 자동 재연결 5초 대기
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      connectHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
      debug: (str) => console.log(str), // 디버그 로그

      onConnect: () => {
        setIsConnected(true);
        console.log("WebSocket connected");

        // 구독 시작 (예: '/topic/messages' 채널)
        client.subscribe("/topic/messages", (message) => {
          setMessages((prevMessages) => [...prevMessages, message.body]);
        });
      },

      onDisconnect: () => {
        setIsConnected(false);
        console.log("WebSocket disconnected");
      },

      onStompError: (frame) => {
        console.error("WebSocket error:", frame);
      },
    });

    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate(); // 컴포넌트가 언마운트될 때 WebSocket 연결 해제
    };
  }, []);

  // 메시지 전송 함수
  const sendMessage = () => {
    if (clientRef.current && clientRef.current.connected) {
      clientRef.current.publish({
        destination: "/app/send",
        body: "Hello, WebSocket!",
      });
    }
  };

  return (
    <div>
      <h2>WebSocket Connection Status: {isConnected ? "Connected" : "Disconnected"}</h2>
      <button onClick={sendMessage} disabled={!isConnected} className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">
        Send Message
      </button>
      <div className="mt-4">
        <h3>Received Messages:</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebSocketComponent;
