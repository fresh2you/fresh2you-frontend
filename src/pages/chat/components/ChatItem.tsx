import { useNavigate } from "react-router-dom";
import useMaxLengthByScreenRatio from "../hooks/useMaxLenByScreenRation";
import { formatDate } from "../utils/formatDate";
import { getTruncatedMessage } from "../utils/getTruncatedMessage";
import "../../../styles/styles.css";
import ImgFallback from "@/assets/img/circle-logo.svg";

const ChatItem: React.FC<{ chat: ChatRoom }> = ({ chat }) => {
  const navigate = useNavigate();
  const maxLength = useMaxLengthByScreenRatio(28, 31);
  const truncatedMessage = getTruncatedMessage(chat.lastMessage, maxLength);

  return (
    <div
      role="button"
      tabIndex={0}
      className="flex items-center px-4 py-3 border-gray-200 rounded-md text-custom-black custom-focus-light"
      onClick={() => navigate(`/chatting/${chat.chatRoomID}`)}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/chatting/${chat.chatRoomID}`)}
    >
      {chat.imgUrl ? (
        <img src={chat.imgUrl} alt={chat.name} className="w-1/6 rounded-full max-w-16" />
      ) : (
        <ImgFallback className="w-full h-full rounded-full" alt={`${chat.name}님의 프로필 사진`} />
      )}
      <div className="flex-grow pl-2.5 pr-3 h-full">
        <h2 className="font-semibold text-custom-p whitespace-nowrap">{chat.name}</h2>
        <p className="text-gray-500 text-custom-span whitespace-nowrap">{truncatedMessage}</p>
      </div>
      <span className="self-start text-custom-span-sm whitespace-nowrap">{formatDate(chat.lastMessageTimeStamp)}</span>
    </div>
  );
};

export default ChatItem;
