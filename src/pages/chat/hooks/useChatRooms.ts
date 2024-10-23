// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { fetchChatRooms } from "../api/chatApis";
import exampleChats from "@/mockData/chatListMockData";

const useChatRooms = (userId: number) => {
  console.log(userId);
  const chatRooms = exampleChats;
  // const [chatRooms, setChatRooms] = useState(exampleChats);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const initializeChat = async () => {
  //     try {
  //       const rooms = await fetchChatRooms()
  //       setChatRooms(rooms);
  //     } catch (error) {
  //       console.error("채팅방 조회/생성 실패:", error);
  //       navigate("/chat");
  //     }
  //   };

  //   if (userId) {
  //     initializeChat();
  //   }
  // }, [userId]);
  return chatRooms;
};

export default useChatRooms;
