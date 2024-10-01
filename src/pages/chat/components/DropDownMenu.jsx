import { handleBlockUser, handleLeaveChatRoom } from "../api/chatApis";
const DropDownMenu = ({ chatInfo, navigate }) => {
  const handleOptionClick = (action) => {
    setIsOpen(false);
  };
  const handleAction = async (actionType) => {
    if (actionType === "block") {
      console.log("sss");
      await handleBlockUser(chatInfo.userId, chatInfo.chatPartnerId);
      console.log("사용자가 차단되었습니다.");
    } else if (actionType === "leave") {
      const response = await handleLeaveChatRoom(chatInfo.chatRoomId, chatInfo.userId);
      if (response.success) {
        navigate("/chatting");
      }
    }
  };
  return (
    <div
      className="absolute left-0 bottom-[57px] w-48
       bg-white border border-gray-200 shadow-lg rounded-r-lg"
    >
      <button
        onClick={() => handleAction("block")}
        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 
        rounded-none"
      >
        차단하기
      </button>
      <button
        onClick={() => handleAction("leave")}
        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100
           rounded-none"
      >
        채팅방 나가기
      </button>
    </div>
  );
};
export default DropDownMenu;
