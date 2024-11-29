import ChatItem from "./components/ChatItem";

import useChatRooms from "./hooks/useChatRooms";

const ChatListPage = () => {
  const { myChatList: chatRooms } = useChatRooms();
  if (!chatRooms) {
    return;
  }
  return (
    <div
      className="bg-white max-w-[600px] flex flex-col mx-auto py-2
    shadow-lg min-h-full"
    >
      {chatRooms.length === 0 ? (
        <div className="p-4 mt-4 text-center text-gray-500 text-custom-h3">협상을 시작해보세요!</div>
      ) : (
        chatRooms.map((chatRoom: ChatRoom) => <ChatItem key={chatRoom.chatRoomId} chatRoom={chatRoom} />)
      )}
    </div>
  );
};

export default ChatListPage;
