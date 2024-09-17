import axios from "axios";

// API endpoint for sending messages
const API_URL = "";

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(API_URL, { message });
    return response.data;
  } catch (error) {
    console.error("Failed to send message:", error);
    throw error;
  }
};
