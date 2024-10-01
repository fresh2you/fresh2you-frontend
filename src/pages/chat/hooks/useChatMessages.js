import { useState, useEffect } from "react";
import { fetchChatMessages } from "../api/chatApis";

const useChatMessages = (chatRoomId, userId) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const fetchedMessages = await fetchChatMessages(userId);
        setMessages(fetchedMessages);
      } catch (error) {
        console.error("Error fetching chat messages:", error);
      }
    };

    if (chatRoomId) {
      getMessages();
    }
  }, [chatRoomId, userId]);

  return messages;
};

export default useChatMessages;
