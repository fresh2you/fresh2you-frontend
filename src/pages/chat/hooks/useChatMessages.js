import { useState, useEffect } from "react";
import { fetchChatMessages } from "../api/chatApis";

const useChatMessages = (chatRoomId, userId, setMessages) => {
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
};

export default useChatMessages;
