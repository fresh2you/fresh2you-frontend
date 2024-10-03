import { Client } from "@stomp/stompjs";

export const chatService = {
  client: null,

  connect: (chatRoomId, onMessageReceived, onConnect, onError) => {
    chatService.client = new Client({
      brokerURL: "ws://localhost:3000/ws",
      reconnectDelay: 5000,
    });

    chatService.client.onConnect = (frame) => {
      console.log("Connected to WebSocket");
      onConnect(); // 연결 성공 시 콜백 호출

      // 채팅룸에 구독
      chatService.client.subscribe(`/sub/chatroom/${chatRoomId}`, (message) => {
        const newMessage = JSON.parse(message.body);
        onMessageReceived(newMessage);
      });
    };

    chatService.client.onStompError = (frame) => {
      console.error("Broker reported error: " + frame.headers["message"]);
      console.error("Additional details: " + frame.body);
      onError(); // 연결 실패 시 콜백 호출
    };

    chatService.client.activate(); // 클라이언트 활성화
  },

  disconnect: (onDisconnect) => {
    if (chatService.client) {
      chatService.client.deactivate().then(() => {
        console.log("Disconnected from WebSocket");
        if (onDisconnect) onDisconnect(); // 연결 해제 시 콜백 호출
      });
    }
  },

  sendMessage: (messageBody) => {
    console.log(chatService.client.connected);
    if (chatService.client && chatService.client.connected) {
      chatService.client.publish({
        destination: "/pub/message",
        body: JSON.stringify(messageBody),
      });
      console.log("발신한 메시지:", message);
    } else {
      console.error("Cannot send message, STOMP client is not connected.");
    }
  },
};
