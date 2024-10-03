import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchChatRooms } from "../api/chatApis";

const useChatRooms = (userId) => {
  const [chatRooms, setChatRooms] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const initializeChat = async () => {
      try {
        const rooms = await fetchChatRooms(); // API 호출
        setChatRooms(rooms);
      } catch (error) {
        console.error("채팅방 조회/생성 실패:", error);
        navigate("/chat");
      }
    };

    if (userId) {
      initializeChat();
    }
  }, [userId]);

  return chatRooms;
};

export default useChatRooms;
