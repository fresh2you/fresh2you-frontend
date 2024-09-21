import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChatItem = ({ chat }) => {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 425);
  const [maxLength, setMaxLength] = useState(isSmallScreen ? 23 : 20);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 425);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setMaxLength(isSmallScreen ? 23 : 20);
  }, [isSmallScreen]);

  const truncatedMessage =
    chat.lastMessage.length > maxLength ? chat.lastMessage.slice(0, maxLength) + "..." : chat.lastMessage;

  return (
    <div
      className="flex py-4 items-center 2xs:px-4 px-6 border-gray-200 text-custom-black"
      onClick={() => navigate(`/chatting/${chat.id}`)}
    >
      <img src={chat.avatar} alt={chat.nickname} className="w-14 h-14 rounded-full mr-3 2xs:w-12 2xs:h-12" />
      <div className="flex-grow">
        <h2 className="text-lg font-semibold 2xs:text-base">{chat.nickname}</h2>
        <p className="text-gray-500 whitespace-nowrap w-28 2xs:text-sm">{truncatedMessage}</p>
      </div>
      <span className="text-gray-400 text-sm whitespace-nowrap 2xs:text-xs">{chat.timestamp}</span>
    </div>
  );
};

export default ChatItem;
