import { useNavigate } from "react-router-dom";
import useMaxLengthByScreenRatio from "../hooks/useMaxLenByScreenRation";
import { formatDate } from "../utils/formatDate";
import useChatRoomName from "../hooks/useChatRoomName";
import { ParticipantImages } from "./ParticipantImages";
import { getTruncatedMessage } from "../utils/getTruncatedMessage";
import "../../../styles/styles.css";

const ChatItem: React.FC<{ chat: ChatRoom; userId: number }> = ({ chat, userId }) => {
  const navigate = useNavigate();
  const maxLength = useMaxLengthByScreenRatio(32);
  const truncatedMessage = getTruncatedMessage(chat.lastMessage, maxLength);
  const participants = chat.participants.filter((participant) => participant.userId !== userId);
  const chatRoomName = useChatRoomName(participants, userId);

  return (
    <div
      role="button"
      tabIndex={0}
      className="flex py-3 items-center px-4 border-gray-200 text-custom-black custom-focus-light rounded-md"
      onClick={() => navigate(`/chatting/${chat.roomId}`)}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/chatting/${chat.roomId}`)}
    >
      <ParticipantImages participants={participants} />
      <div className="flex-grow pl-2.5 pr-3">
        <div className="flex items-center gap-2">
          <h2 className="text-custom-p font-semibold whitespace-nowrap">{chatRoomName}</h2>
          {participants.length > 1 && (
            <span className="text-custom-span text-custom-gray-dark">{participants.length}</span>
          )}
        </div>
        <p className="text-gray-500 text-custom-span whitespace-nowrap">{truncatedMessage}</p>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-custom-span-sm whitespace-nowrap">{formatDate(chat.lastMessageTime)}</span>
        <span
          className={`text-custom-span-sm leading-6 text-white bg-red-500 text-center rounded-full w-6 h-6 ${
            chat.unreadMessageCount > 0 ? "visible" : "invisible"
          }`}
        >
          {chat.unreadMessageCount}
        </span>
      </div>
    </div>
  );
};

export default ChatItem;
