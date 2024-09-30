import { instance } from "@/instance";

const boardAPI = {
  getAllBoards: async () => {
    const { data: response } = await instance.get("/boards");

    return response;
  },

  postBoard: async ({ title, productId }: { title: string; productId: number }) => {
    const { data: response } = await instance.post("/boards", {
      title,
      productId,
    });

    return response;
  },

  getBoardMessages: async (boardId: number) => {
    const { data: response } = await instance.get(`/boards/${boardId}/messages`);

    return response;
  },

  postBoardMessages: async ({
    boardId,
    messageType,
    content,
  }:
    | {
        boardId: number;
        messageType: "TEXT";
        content: string;
      }
    | {
        boardId: number;
        messageType: "IMAGE";
        content: File;
      }) => {
    const headerType =
      messageType === "IMAGE"
        ? {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        : undefined;

    const { data: response } = await instance.post(
      `/boards/${boardId}/messages`,
      {
        messageType,
        content,
      },
      headerType,
    );

    return response;
  },

  deleteBoard: async (boardId: number) => {
    const { data: response } = await instance.delete(`/boards/${boardId}`);

    return response;
  },

  patchBoard: async ({ boardId, title }: { boardId: number; title: string }) => {
    const { data: response } = await instance.patch(`/boards/${boardId}`, { title });

    return response;
  },

  deleteBoardMessages: async ({ boardId, messageId }: { boardId: number; messageId: number }) => {
    const { data: response } = await instance.delete(`/boards/${boardId}/messages/${messageId}`);

    return response;
  },
};

export default boardAPI;
