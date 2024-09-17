import { useAtom } from "jotai";
import data from "../../mockdata/db.json";
import ChatHeader from "./components/ChatHeader";
import ChatFooter from "./components/ChatFooter";
import ProductInfo from "../product/components/details/ProductInfo";
import { productAtom } from "@/stores/product";
import { groupMessagesByDateAndSender, isWithinOneMinute } from "@/utils/commonUtils";
import MessageList from "./components/MessageList";

const ChatPage = () => {
  const [product] = useAtom(productAtom);
  const chatMessages = data.chatMessages;
  const chat = chatMessages.find((chatItem) => chatItem.id == product.product_id);
  const today = new Date().toISOString().split("T")[0];

  if (!chat) {
    console.log("유효하지 않은 대화 ID입니다.");
    return;
  }

  if (chat.messages.length === 0) {
    return (
      <div className="bg-white max-w-md mx-auto text-custom-black relative">
        <ChatHeader nickname={chat.nickname} />
        <ProductInfo inChat={true} />
        <div className="pt-[164px] pb-16">
          <ChatFooter />
        </div>
      </div>
    );
  }

  const messagesGroupedByDateAndSender = groupMessagesByDateAndSender(chat.messages);
  const messagesWithTimestamps = messagesGroupedByDateAndSender.flatMap(({ date, messages }) => {
    return messages.flatMap((group) => {
      return group.map((message, index, array) => {
        const prevTimestamp = index > 0 ? array[index - 1].timestamp : null;
        const nextTimestamp = index < array.length - 1 ? array[index + 1].timestamp : null;

        const showTimestamp =
          (index > 0 && !isWithinOneMinute(prevTimestamp, message.timestamp)) || // 이전 메시지와 1분 이상 차이
          index === array.length - 1 || // 마지막 메시지에 타임스탬프 표시
          (index > 0 && !isWithinOneMinute(message.timestamp, nextTimestamp)); // 현재 메시지와 다음 메시지 사이에 1분 이상 차이

        return { ...message, showTimestamp, chatNickname: chat.nickname, chatSenderAvatar: chat.sender_avatar };
      });
    });
  });

  return (
    <div className="bg-white max-w-md mx-auto text-custom-black relative">
      <ChatHeader nickname={chat.nickname} />
      <ProductInfo inChat={true} />
      <div className="pt-[164px] pb-16">
        <MessageList messagesWithTimestamps={messagesWithTimestamps} today={today} />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;
