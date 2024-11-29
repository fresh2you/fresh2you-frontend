declare interface IChatRoomResponse extends defaultApiResponse {
  data: {
    chatRoomId: number;
    name: string;
  };
}
