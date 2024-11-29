import { useNavigate } from "react-router-dom";
import useMaxLengthByScreenRatio from "../hooks/useMaxLenByScreenRation";
import { formatDate } from "../utils/formatUtils";
import { getTruncatedMessage } from "../utils/getTruncatedMessage";
import "../../../styles/styles.css";
import ImgFallback from "@/assets/img/fallback.svg";

const ChatItem: React.FC<{ chatRoom: ChatRoom }> = ({ chatRoom }) => {
  const navigate = useNavigate();
  const maxLength = useMaxLengthByScreenRatio(28, 31);
  const truncatedMessage = getTruncatedMessage(chatRoom.lastMessage, maxLength);
  const lastSentAt = chatRoom.lastSentAt ? formatDate(chatRoom.lastSentAt) : "";
  const chatRoomName = chatRoom.name.replace(/[,[\]]/g, "");
  return (
    <div
      role="button"
      tabIndex={0}
      className="flex items-center py-3 px-4 rounded-md border-gray-200 text-custom-black custom-focus-light"
      onClick={() => navigate(`/chatting/${chatRoom.chatRoomId}`)}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/chatting/${chatRoom.chatRoomId}`)}
    >
      <ImgFallback className="w-[10%] min-w-10 max-w-14 h-full rounded-full" alt={chatRoomName} />
      <div className="flex-grow pl-2.5 pr-3 h-full">
        <h2 className="font-medium whitespace-nowrap text-custom-p">{chatRoomName}</h2>
        <p className="text-gray-500 whitespace-nowrap text-custom-span min-h-[1rem]">{truncatedMessage}</p>
      </div>
      <span className="self-start mt-1 text-sm whitespace-nowrap">{lastSentAt}</span>
    </div>
  );
};

export default ChatItem;
