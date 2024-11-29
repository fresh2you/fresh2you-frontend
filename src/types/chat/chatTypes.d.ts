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
