import { Client } from "@stomp/stompjs";

const createStompClient = (callback: () => void): Client => {
  const accessToken = localStorage.getItem("accessToken");
  return new Client({
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
      callback();
    },
  });
};
export default createStompClient;
