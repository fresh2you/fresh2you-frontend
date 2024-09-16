import { useState } from "react";
import SendIcon from "../../../assets/icons/send.svg";
import { sendMessage } from "../api/api";
const ChatFooter = () => {
  // chatRoomId, memberId, token
  const [inputValue, setInputValue] = useState("");
  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return; // Prevent sending empty messages

    try {
      // Send message via API
      // await sendMessage(chatRoomId, memberId, "text", inputValue, token);

      // Clear the input field after sending
      setInputValue("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="fixed bottom-0 w-full bg-white py-2 px-3 flex items-center border-t">
      <input
        type="text"
        value={inputValue}
        className="bg-gray-200 w-11/12 p-2 rounded focus:outline-none"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="bg-transparent p-0 border-transparent ml-2" onClick={handleSendMessage}>
        <SendIcon className="w-7 h-7" />
      </button>
    </div>
  );
};
export default ChatFooter;
