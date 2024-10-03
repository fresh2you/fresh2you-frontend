import { instance } from "@/instance";
const token = localStorage.getItem("accessToken");
export const createChatRoom = async (params) => {
  try {
    const response = await instance.post("/chat/one-to-one", params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("채팅방 조회/생성 실패:", error);
    throw error;
  }
};
export const handleBlockUser = async (userId, blockedId) => {
  try {
    const response = await instance.post("/chat/block", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        chatBlockerId: userId,
        chatBlockedId: blockedId,
      },
    });
  } catch (error) {
    console.error("차단하는 중 에러 발생:", error);
  }
};
export const handleLeaveChatRoom = async (chatRoomId, userId) => {
  try {
    const response = await instance.post(`/chat/${chatRoomId}/leave`, null, {
      params: {
        memberId: userId,
        chatRoomId: chatRoomId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("채팅방 나가기 중 에러 발생:", error);
  }
};
export const fetchChatMessages = async (chatRoomId) => {
  try {
    const response = await instance.get(`/chat/${chatRoomId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { id: chatRoomId },
    });
    return response.data;
  } catch (error) {
    console.error("메시지 리스트를 가져오는 중 에러 발생:", error);
    throw error;
  }
};
export const fetchChatRooms = async () => {
  try {
    const response = await axios.get("/chat/rooms", {
      //수정 필요
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("채팅방 리스트 불러오기 실패:", error);
    throw error;
  }
};
