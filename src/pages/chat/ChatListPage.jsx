import ChatItem from "./components/ChatItem";
import exampleChats from "@/mockdata/chatListMockData";
import { fetchOrCreateChatRooms } from "./api/chatApis";
import { useEffect } from "react";

const ChatListPage = () => {
  const chats = exampleChats;
  const userId = localStorage.getItem("id");
  useEffect(() => {
    const initializeChat = async () => {
      try {
        const params = {
          buyerId: userId,
          sellerId: null,
          productId: null,
          categoryId: null,
        };

        const chatData = await fetchOrCreateChatRooms(params);
        console.log("채팅 데이터:", chatData);
      } catch (error) {
        console.error("채팅방 조회/생성 실패:", error);
        navigate("/chat");
      }
    };

    initializeChat();
  }, [userId]);
  return (
    <div
      className="bg-white max-w-[577px] flex flex-col justify-center mx-auto pb-2 tablet:pt-2
    shadow-lg"
    >
      {chats.length === 0 ? (
        <div className="p-4 text-center text-gray-500 h-screen mt-4 text-custom-p">채팅이 없습니다.</div>
      ) : (
        chats.map((chat) => <ChatItem key={chat.id} chat={chat} />)
      )}
    </div>
  );
};

export default ChatListPage;
