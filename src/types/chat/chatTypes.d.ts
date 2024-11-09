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

declare interface Product {
  productId: number;
  productName: string;
  price: number;
  imageUrl: string;
}

declare interface ChatRoom {
  chatRoomID: string;
  name: string;
  userCount: number;
  product: Product;
  imgUrl: string;
  lastMessage: string;
  lastMessageTimeStamp: string;
}
