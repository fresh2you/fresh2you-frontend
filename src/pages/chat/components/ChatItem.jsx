import { useNavigate } from "react-router-dom";
import useMaxLengthByScreenRatio from "../hooks/useMaxLenByScreenRation";
import imgFallback from "../../../assets/img/circle-logo.png";

const ChatItem = ({ chat }) => {
  const navigate = useNavigate();
  const maxLength = useMaxLengthByScreenRatio();
  const truncatedMessage =
    chat.lastMessage.length > maxLength ? chat.lastMessage.slice(0, maxLength) + "..." : chat.lastMessage;

  return (
    <div
      className="flex py-3 items-center px-4 border-gray-200 text-custom-black"
      onClick={() => navigate(`/chatting/${chat.id}`)}
    >
      <img src={imgFallback} alt={chat.nickname} className="w-2/12 max-w-[64px] rounded-full mr-3" />
      <div className="flex-grow">
        <h2 className="text-custom-p font-semibold">{chat.nickname}</h2>
        <p className="text-gray-500 text-custom-span">{truncatedMessage}</p>
      </div>
    </div>
  );
};

export default ChatItem;
