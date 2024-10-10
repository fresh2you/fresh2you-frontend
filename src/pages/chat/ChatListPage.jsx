import ChatItem from "./components/ChatItem";
import { useEffect } from "react";
import { fetchChatRooms } from "./api/chatApis";
import useMyPageLogics from "../mypage/mypage/hooks/useMyPageLogics";
import useChatRooms from "./hooks/useChatRooms";
const ChatListPage = () => {
  const { userInfo } = useMyPageLogics();
  const chatRooms = useChatRooms(userInfo?.userId);

  return (
    <div
      className="bg-white max-w-[577px] flex flex-col justify-center mx-auto pb-2 tablet:pt-2
    shadow-lg"
    >
      {chatRooms.length === 0 ? (
        <div className="h-screen p-4 mt-4 text-center text-gray-500 text-custom-h3">협상을 시작해보세요!</div>
      ) : (
        chatRooms.map((chat) => <ChatItem key={chat.id} chat={chat} />)
      )}
    </div>
  );
};

export default ChatListPage;
