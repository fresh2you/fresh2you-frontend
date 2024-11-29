import MessageList from "./components/MessageList";
import ChatFooter from "./components/ChatFooter";
import "../../styles/styles.css";
import { useChatPage } from "./hooks/useChatPage";
import useHeaderProps from "@/hooks/useHeaderProps";
import useScrollToBottom from "./hooks/useScrollToBottom";
import ProductInfoHeader from "./components/ProductInfoHeader";
import EmptyChatMessage from "./components/EmptyChatMsg";

const ChatPage = () => {
  const { chatRoomId, product, messages, setMessages, messagesEndRef, stompClient } = useChatPage();
  useScrollToBottom(messagesEndRef, messages);
  useHeaderProps({ title: "", hasConfirm: false, backRoute: "../" });
  if (!stompClient) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative w-full max-w-[480px] mx-auto bg-white text-custom-black overflow-hidden h-full">
      {product && <ProductInfoHeader product={product} />}
      <div className="relative mx-auto w-full h-full bg-white">
        <div className="overflow-y-scroll pt-2 tablet-sm:pb-0 w-full mobile:pb-14 mobile:h-full tablet-sm:h-[calc(100%-6rem)] tablet-sm:border">
          {messages ? <MessageList messages={messages} messagesEndRef={messagesEndRef} /> : <EmptyChatMessage />}
        </div>
        <ChatFooter
          chatRoomId={chatRoomId}
          setMessages={setMessages}
          productId={String(product.productId)}
          stompClient={stompClient}
        />
      </div>
    </section>
  );
};

export default ChatPage;
