const MessageItem = ({ message, showTimestamp }) => {
  return (
    <div className={`flex items-end py-2 ${message.sender === message.chatNickname ? "self-start" : "self-end"}`}>
      {message.sender === message.chatNickname && (
        <img src={message.chatSenderAvatar} alt={message.chatNickname} className="w-8 h-8 rounded-full mr-2" />
      )}
      <div className={`flex-grow ${message.sender === message.chatNickname ? "mr-2" : "ml-2"}`}>
        <p
          className={`py-2 px-3 rounded-lg leading-5 xs:max-w-[215px] 2xs:max-w-[200px] break-words ${
            message.sender === message.chatNickname ? "bg-custom-green text-white" : "bg-gray-100"
          }`}
        >
          {message.text}
        </p>
      </div>
      {showTimestamp && (
        <span
          className={`text-gray-400 text-xs whitespace-nowrap ${
            message.sender === message.chatNickname ? "order-last" : "order-first"
          }`}
        >
          {message.timestamp}
        </span>
      )}
    </div>
  );
};

export default MessageItem;
