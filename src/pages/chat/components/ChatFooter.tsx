import React, { useState } from "react";
import SendIcon from "../../../assets/icons/send.svg";
import ListIcon from "../../../assets/icons/list.svg";
import DropDownMenu from "./DropDownMenu";
import "../../../styles/styles.css";
import { inputUtils } from "@/utils/commonUtils";
import { handleSendMessage } from "../utils/chatHandlers";
import { handleToggleMenu } from "../utils/chatHandlers";

interface ChatFooterProps {
  chatRoomId: string | undefined;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  productId: string;
}

const ChatFooter: React.FC<ChatFooterProps> = ({ chatRoomId, setMessages, productId }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className="flex left-0 justify-evenly items-center py-2 w-full bg-white mobile:fixed tablet-sm:absolute mobile:border-t tablet-sm: mobile:bottom-0 tablet-sm:bottom-10 tablet-sm:rounded-b tablet-sm:border">
      <div className="flex relative items-center">
        <button className="p-0 bg-white custom-focus-light" onClick={() => handleToggleMenu(setIsMenuOpen, isMenuOpen)}>
          <ListIcon className="w-7 h-7" alt="목록 보기" />
        </button>
        {isMenuOpen && <DropDownMenu unmount={() => setIsMenuOpen(false)} productId={productId} />}
      </div>
      <input
        type="text"
        value={inputValue}
        className="p-2 w-8/12 bg-gray-200 rounded custom-focus-light"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => inputUtils.handleKeyDown(e, handleSendMessage)}
      />
      <button className="p-0 ml-2 bg-white custom-focus-light" onClick={() => handleSendMessage()}>
        <SendIcon className="w-6 h-6" alt="메시지 전송하기" />
      </button>
    </div>
  );
};

export default ChatFooter;
