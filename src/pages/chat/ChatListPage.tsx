import ChatItem from "./components/ChatItem";
import useMyPageLogics from "../mypage/mypage/hooks/useMyPageLogics";
import useChatRooms from "./hooks/useChatRooms";

const ChatListPage = () => {
  const { userInfo } = useMyPageLogics();
  const chatRooms: ChatRoom[] = useChatRooms(userInfo?.id);

  return (
    <div
      className="bg-white max-w-[600px] flex flex-col mx-auto py-2
    shadow-lg min-h-full"
    >
      {chatRooms.length === 0 ? (
        <div className="p-4 mt-4 text-center text-gray-500 text-custom-h3">협상을 시작해보세요!</div>
      ) : (
        chatRooms.map((chat) => <ChatItem key={chat.roomId} chat={chat} userId={userInfo?.id} />)
      )}
    </div>
  );
};

export default ChatListPage;
