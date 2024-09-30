import { instance } from "@/instance";
const token = localStorage.getItem("accessToken");
export const fetchOrCreateChatRooms = async (params) => {
  console.log(params);
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
