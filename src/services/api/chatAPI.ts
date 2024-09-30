import { instance } from "@/instance";

const chatAPI = {
  leaveChatRoom: async ({ chatRoomId, memberId }: { chatRoomId: number; memberId: number }) => {
    const { data: response } = await instance.post(`/chat/${chatRoomId}/leave`, {
      params: {
        memberId,
      },
    });

    return response;
  },

  getChatMessages: async (chatRoomId: number) => {
    const { data: response } = await instance.get(`/chat/${chatRoomId}`);

    return response;
  },

  blockUser: async ({ chatBlockerId, chatBlockedId }: { chatBlockerId: number; chatBlockedId: number }) => {
    const { data: response } = await instance.post(`/chat/block`, {
      params: {
        chatBlockerId,
        chatBlockedId,
      },
    });

    return response;
  },

  undoBlockUser: async ({ chatBlockerId, chatBlockedId }: { chatBlockerId: number; chatBlockedId: number }) => {
    const { data: response } = await instance.delete(`/chat/block`, {
      params: {
        chatBlockerId,
        chatBlockedId,
      },
    });

    return response;
  },
};

export default chatAPI;
