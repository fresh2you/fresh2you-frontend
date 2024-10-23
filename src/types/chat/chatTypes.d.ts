declare interface Participant {
  userId: number;
  nickname: string;
  profileImageUrl: string;
}

declare interface Message {
  messageId: number;
  content: string;
  timestamp: string;
  senderId: string;
}

declare interface ChatRoom {
  roomId: number;
  roomName: string;
  roomType: string;
  participants: Participant[];
  lastMessage: string;
  lastMessageSender: string;
  lastMessageTime: string;
  unreadMessageCount: number;
  createdAt: string;
}
