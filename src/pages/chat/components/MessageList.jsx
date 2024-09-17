import MessageItem from "./MessageItem";

const MessageList = ({ messagesWithTimestamps, today }) => {
  return (
    <div className="px-4 flex flex-col">
      {messagesWithTimestamps.length > 0 &&
        messagesWithTimestamps.map((message, index) => {
          const showDate = index === 0 || messagesWithTimestamps[index - 1].date !== message.date;
          const messageDate = message.date === today ? "오늘" : message.date;

          return (
            <div key={`${message.timestamp}-${index}`} className="flex flex-col">
              {showDate && <span className="text-center text-sm self-center m-1 text-gray-600">{messageDate}</span>}
              <MessageItem message={message} showTimestamp={message.showTimestamp} />
            </div>
          );
        })}
    </div>
  );
};

export default MessageList;
