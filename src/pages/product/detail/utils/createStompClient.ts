import { Client } from "@stomp/stompjs";

interface StompClientConfig {
  onConnectCallback?: (client: Client) => void; // 연결 후 동작 정의
  onErrorCallback?: (error: string) => void; // 오류 발생 시 동작 정의
}

const createStompClient = ({ onConnectCallback, onErrorCallback }: StompClientConfig): Client => {
  const accessToken = localStorage.getItem("accessToken");

  const client = new Client({
    brokerURL: "wss://api.fresh2you.shop/ws",
    connectHeaders: {
      Authorization: `Bearer ${accessToken}`,
    },
    debug: (str: string): void => {
      console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
    onConnect: () => {
      console.log("STOMP Client Connected");
      if (onConnectCallback) {
        onConnectCallback(client);
      }
    },
    onStompError: (frame) => {
      console.error("Broker reported error: ", frame.headers["message"]);
      console.error("Details: ", frame.body);
      if (onErrorCallback) {
        onErrorCallback(frame.headers["message"]);
      }
    },
  });

  return client;
};

export default createStompClient;
