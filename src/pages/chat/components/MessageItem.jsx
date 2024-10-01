const MessageItem = ({ message }) => {
  const userId = localStorage.getItem("id");
  return (
    <div className={`flex items-end py-2 ${message.sender === "고객" ? "self-end pr-2" : "self-start pl-2"} w-3/5`}>
      <div className={`flex ${message.receiver === "고객" ? "justify-start" : "justify-end"} w-full`}>
        <p
          className={`py-2 px-3 rounded-lg leading-5 break-words ${
            message.sender === "고객" ? "bg-custom-green text-white" : "bg-gray-100"
          }`}
        >
          {message.text}
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
