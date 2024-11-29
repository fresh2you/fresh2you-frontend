import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";
import { formatTimestampDate, formatTimestamp } from "../utils/formatUtils";
import { shouldShowDate } from "../utils/shouldShowDate";

interface MessageItemProps {
  message: Message;
  previousMessageDate?: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, previousMessageDate }) => {
  const { userInfo } = useMyPageLogics();
  const userId = userInfo?.id;
  const isSender = message.senderId === userId;
  const showDate = shouldShowDate(message.timestamp, previousMessageDate);
  const timestamp = formatTimestamp(message.timestamp);
  const dateLabel = isSender ? `메시지 보낸 시간` : `메시지 받은 시간`;

  return (
    <article className="text-center">
      {showDate && (
        <span className="inline-block py-1 px-2 my-2 text-xs rounded-full text-custom-black bg-custom-gray-light">
          {formatTimestampDate(message.timestamp)}
        </span>
      )}
      <div
        className={`flex items-end py-3 ${isSender ? "justify-start pl-2.5" : "justify-end pr-2.5"} w-full text-left`}
      >
        {!isSender && (
          <span className="self-end mr-2 text-xs text-gray-500" aria-label={dateLabel}>
            {timestamp}
          </span>
        )}
        <div className="flex w-auto max-w-56">
          <p
            className={`py-2 px-3 rounded-md leading-5 break-words ${
              isSender ? "bg-gray-100" : "bg-custom-green text-white"
            }`}
          >
            {message.text}
          </p>
        </div>
        {isSender && (
          <span className="ml-2 text-xs text-gray-500" aria-label={dateLabel}>
            {timestamp}
          </span>
        )}
      </div>
    </article>
  );
};

export default MessageItem;
