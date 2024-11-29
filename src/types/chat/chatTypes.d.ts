declare interface Product {
  productId: number;
  productName: string;
  price: number;
  imageUrl: string;
}

declare interface ChatRoom {
  chatRoomId: number;
  name: string;
  userCount: number;
  product: Product;
  lastMessage: string;
  lastSentAt: string;
}

declare interface Message {
  text: string;
  timestamp: string;
  senderId: number;
  receiverId: number;
}

declare interface Chat {
  chatRoomID: number;
  imgUrl: string;
  nickname: string;
  messages: Message[];
  product: Product;
}
