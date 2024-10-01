import MessageItem from "./MessageItem";

const MessageList = ({ messages }) => {
  return (
    <div className="flex flex-col px-2 w-full">
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
