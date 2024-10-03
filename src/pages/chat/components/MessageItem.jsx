const MessageItem = ({ message, userId }) => {
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  const isSender = message.senderId === userId;
  return (
    <div className={`flex items-end py-2 ${isSender ? "self-start pl-2" : "self-end pr-2 "} max-w-3/5`}>
      {!isSender && <span className={`text-xs text-gray-500 mr-2 self-end`}>{formatTimestamp(message.timestamp)}</span>}
      <div className={`flex ${isSender ? "justify-start" : "justify-end"}`}>
        <p
          className={`py-2 px-3 rounded-lg leading-5 break-words ${
            isSender ? "bg-gray-100 " : "bg-custom-green text-white"
          }`}
        >
          {message.content}
        </p>
      </div>
      {isSender && <span className={`text-xs text-gray-500 ml-2`}>{formatTimestamp(message.timestamp)}</span>}
    </div>
  );
};

export default MessageItem;
