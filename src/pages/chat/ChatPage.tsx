import ProductInfo from "../product/detail/components/ProductInfo";
import MessageList from "./components/MessageList";
import ChatFooter from "./components/ChatFooter";
import "../../styles/styles.css";
import ArrowLeftIcon from "../../assets/icons/arrow-left-sm.svg";
import ArrowRightIcon from "../../assets/icons/arrow-right-sm.svg";
import { useChatPage } from "./hooks/useChatPage";

const ChatPage = () => {
  const {
    chatRoomId,
    userId,
    product,
    messages,
    setMessages,
    showProductInfo,
    toggleProductInfo,
    messagesEndRef,
    navigate,
  } = useChatPage();

  return (
    <div className="relative w-full mx-auto bg-white text-custom-black">
      <div
        className={`fixed opacity-95 left-4 max-w-[450px] rounded-md mr-4 p-1.5 transition-transform duration-300 overflow-hidden flex 
          ${showProductInfo ? "translate-x-0" : "-translate-x-[96%]"}
          ${Object.keys(product).length > 0 ? "bg-gray-100 border" : "bg-white border-none"}`}
      >
        {Object.keys(product).length > 0 && (
          <div className="flex items-start">
            <ProductInfo inChat={true} product={product} noBtn={false} className="mr-12" />
            <button
              onClick={toggleProductInfo}
              className="fixed top-0 bottom-0 right-0 p-0 bg-gray-200 rounded-none custom-focus-light"
            >
              {showProductInfo ? <ArrowLeftIcon /> : <ArrowRightIcon />}
            </button>
          </div>
        )}
      </div>
      <div className="w-full h-screen max-w-lg pt-2 mx-auto rounded tablet-sm:border mobile:pb-16">
        {messages.length ? (
          <>
            <MessageList messages={messages} />
            <div ref={messagesEndRef} />
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-custom-p">채팅을 시작해 보세요!</p>
          </div>
        )}
      </div>
      <ChatFooter chatInfo={{ chatRoomId, userId, chatPartnerId: 80 }} navigate={navigate} setMessages={setMessages} />
    </div>
  );
};

export default ChatPage;
