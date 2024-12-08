import React, { useEffect, useState } from "react";
import { Client, IStompSocket } from "@stomp/stompjs";

interface ChatMessageResponse {
  content: string;
  // 서버 응답에 따라 다른 필드들도 추가 가능
}

const TestPage = () => {
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [messages, setMessages] = useState<ChatMessageResponse[]>([]);
  const [message, setMessage] = useState<string>("");
  const chatRoomId = "1";

  useEffect(() => {
    // STOMP 클라이언트 설정

    const client = new Client({
      brokerURL: "wss://api.fresh2you.shop/ws",
      appendMissingNULLonIncoming: true,
      connectHeaders: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        /* Connection: "Upgrade",
        Upgrade: "websocket", */
      },
      reconnectDelay: 60000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      debug: (str) => {
        console.log("STOMP Debug:", str);
      },
      onConnect: (frame) => {
        console.log("웹소켓 연결 성공!");
        console.log(frame);
        console.log("연결 상태:", client.connected);
        console.log("세션 ID:", client.connectedVersion);

        /* client.publish({
          destination: `/pub/chat/enter/${chatRoomId}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }); */

        /* client.subscribe(`/sub/chat/room/${chatRoomId}`, (message) => {
          console.log("메시지 수신", message);

          const newMessage = JSON.parse(message.body);
          setMessages((prev) => [...prev, newMessage]);
        }); */
      },
      onDisconnect: () => {
        console.log("연결이 종료되었습니다.");
      },
      onStompError: (frame) => {
        console.error("STOMP 에러:", frame);
        console.error("STOMP 에러:", frame.headers.message);
      },
      beforeConnect: () => {
        console.log("연결 시도 중...");
        console.log("토큰:", localStorage.getItem("accessToken"));
      },
    });

    /*   if (typeof WebSocket !== "function") {
      client.webSocketFactory = function () {
        return new SockJS("https://api.fresh2you.shop/ws") as unknown as IStompSocket;
      };
    } else {
      client.webSocketFactory = function () {
        return new WebSocket("wss://api.fresh2you.shop/ws") as unknown as IStompSocket;
      };
    } */

    // 연결 시작
    client.activate();
    setStompClient(client);

    // 컴포넌트 언마운트 시 연결 해제
    return () => {
      //console.log("컴포넌트 언마운트");
      client.deactivate();
    };
  }, [chatRoomId]);

  /*   useEffect(() => {
    console.log("messages: ", messages);
  }, [messages]); */

  // 메시지 전송 함수
  const sendMessage = () => {
    console.log(stompClient);
    console.log(stompClient?.connected, stompClient?.connected.valueOf);

    if (stompClient && stompClient.connected && message.trim()) {
      console.log("메시지 전송");

      stompClient.publish({
        destination: `/pub/chat/send/${chatRoomId}`,
        body: JSON.stringify({ message: message }),
      });

      setMessage("");
    }
  };

  const getMessages = () => {
    stompClient?.subscribe(`/sub/chat/room/${chatRoomId}`, (message) => {
      console.log("메시지 수신", message);

      const newMessage = JSON.parse(message.body);
      setMessages((prev) => [...prev, newMessage]);
    });
  };

  return (
    <div>
      <h1>채팅방</h1>
      <button onClick={getMessages}>메세지 가져오기</button>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index}>{msg.content}</div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>전송</button>
      </div>
    </div>
  );
};

export default TestPage;
