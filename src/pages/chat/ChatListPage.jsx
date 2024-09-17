import ChatItem from "./components/ChatItem";
import exampleChats from "@/mockdata/chatListMockData";
const ChatListPage = () => {
  const chats = exampleChats;

  return (
    <div className="bg-white rounded-lg shadow-lg max-w-md mx-auto 2xs:py-2 xs:px-2">
      {chats.length === 0 ? (
        <div className="p-4 text-center text-gray-500">채팅이 없습니다.</div>
      ) : (
        chats.map((chat) => <ChatItem key={chat.id} chat={chat} />)
      )}
    </div>
  );
};

export default ChatListPage;
