import MessageItem from "./MessageItem";

interface MessageListProps {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

const MessageList: React.FC<MessageListProps> = ({ messages, messagesEndRef }) => {
  return (
    <div>
      {messages.map((message, index) => {
        const previousMessageDate = index > 0 ? messages[index - 1].timestamp : undefined;
        return (
          <MessageItem
            key={`${message.timestamp}-${message.senderId}`}
            message={message}
            previousMessageDate={previousMessageDate}
          />
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
