import { useQuery } from "@tanstack/react-query";
import chatAPI from "@/services/api/chatAPI";

const useChatRooms = () => {
  const { data: myChatList, refetch } = useQuery({
    queryKey: ["getMyChatList"],
    queryFn: async () => {
      const { data: result } = await chatAPI.getChatList();
      console.log(result);
      return result.chatRooms;
    },
    staleTime: 600 * 1000,
    retry: 0,
  });

  return { myChatList, refetch };
};

export default useChatRooms;
