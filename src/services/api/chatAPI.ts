import { instance } from "@/instance";

const chatAPI = {
  getChatMessages: async (chatRoomId: number) => {
    const { data: response } = await instance.get(`/chat/${chatRoomId}`);

    return response;
  },

  createChatRoom: async ({
    type,
    name,
    productId,
    loginMemberType,
  }: {
    type: "PRIVATE" | "GROUP";
    name: string | null;
    productId: number;
    loginMemberType: "HOST" | "PARTICIPANT";
  }) => {
    const { data: response } = await instance.post<IChatRoomResponse>(`/chat/rooms`, {
      type,
      name,
      productId,
      loginMemberType,
    });

    return response;
  },

  getChatList: async () => {
    const { data: response } = await instance.get(`/chat/rooms/my`);
    console.log(response);
    return response;
  },
};

export default chatAPI;
