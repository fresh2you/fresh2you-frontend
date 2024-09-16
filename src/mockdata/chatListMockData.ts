const avatar1 = "https://i.postimg.cc/y6h7zyLF/1.png";
const avatar2 = "https://i.postimg.cc/659t64PF/10.png";
const avatar3 = "https://i.postimg.cc/W1yv7W4P/11.png";
const avatar4 = "https://i.postimg.cc/3xNhm5YB/14.png";
const avatar5 = "https://i.postimg.cc/RVX9WV5h/18.png";
const avatar6 = "https://i.postimg.cc/7LTyt3CJ/22.png";
const avatar7 = "https://i.postimg.cc/TwMvzKm7/24.png";
const avatar8 = "https://i.postimg.cc/gJVbmGHY/27.png";
const avatar9 = "https://i.postimg.cc/Gtbwp6Xv/28.png";
const avatar10 = "https://i.postimg.cc/FzGtkG68/29.png";

interface Chat {
  id: number;
  nickname: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
}
const exampleChats: Chat[] = [
  {
    id: 1,
    nickname: "사과왕",
    avatar: avatar1,
    lastMessage: "사과 10kg에 얼마로 가능하신가요?",
    timestamp: "오전 10:30",
  },
  {
    id: 2,
    nickname: "채소마니아",
    avatar: avatar2,
    lastMessage: "상추 5묶음과 토마토 10kg에 할인 가능한가요?",
    timestamp: "오전 9:45",
  },
  {
    id: 3,
    nickname: "유기농러버",
    avatar: avatar3,
    lastMessage: "유기농 당근 3kg에 가격 조정 가능할까요?",
    timestamp: "오후 7:15",
  },
  {
    id: 4,
    nickname: "감자매니아",
    avatar: avatar4,
    lastMessage: "감자와 호박을 함께 구매할 때 할인해 주실 수 있나요?",
    timestamp: "오후 2:30",
  },
  {
    id: 5,
    nickname: "참외사랑",
    avatar: avatar5,
    lastMessage: "참외 5개에 가격 좀 더 낮출 수 있나요?",
    timestamp: "오후 4:50",
  },
  {
    id: 6,
    nickname: "배추광",
    avatar: avatar6,
    lastMessage: "배추 10개와 무 5개를 같이 구매하면 얼마인가요?",
    timestamp: "오후 6:00",
  },
  {
    id: 7,
    nickname: "토마토짱",
    avatar: avatar7,
    lastMessage: "토마토 20kg과 오이 10개를 저렴하게 살 수 있을까요?",
    timestamp: "오전 11:00",
  },
  {
    id: 8,
    nickname: "딸기애호가",
    avatar: avatar8,
    lastMessage: "유기농 딸기 2kg에 할인 가능한지요?",
    timestamp: "오후 5:20",
  },
  {
    id: 9,
    nickname: "그린빈팬",
    avatar: avatar9,
    lastMessage: "그린빈 3kg와 당근 5kg을 저렴하게 구매할 수 있을까요?",
    timestamp: "오후 12:45",
  },
  {
    id: 10,
    nickname: "감자왕국",
    avatar: avatar10,
    lastMessage: "새로 수확한 감자를 대량 구매할 때 할인 해주실 수 있나요?",
    timestamp: "오후 3:30",
  },
  {
    id: 11,
    nickname: "김장준비자",
    avatar: avatar1,
    lastMessage: "김장용 배추 20개에 대해 가격 협상 가능하신가요?",
    timestamp: "오전 10:00",
  },
  {
    id: 12,
    nickname: "양파러버",
    avatar: avatar2,
    lastMessage: "양파 10kg과 감자 10kg 구매할 때 할인 가능할까요?",
    timestamp: "오후 1:00",
  },
  {
    id: 13,
    nickname: "가을채소마니아",
    avatar: avatar3,
    lastMessage: "가을 배추 5통을 저렴하게 구입할 수 있는 방법이 있을까요?",
    timestamp: "오후 7:30",
  },
  {
    id: 14,
    nickname: "당근사랑",
    avatar: avatar4,
    lastMessage: "당근 2kg을 다른 농산물과 묶음으로 구매할 때 할인 있나요?",
    timestamp: "오전 11:30",
  },
  {
    id: 15,
    nickname: "감귤애호가",
    avatar: avatar5,
    lastMessage: "감귤 10kg과 배 5개를 함께 구매하면 어떻게 되나요?",
    timestamp: "오후 4:00",
  },
  {
    id: 16,
    nickname: "과일퀸",
    avatar: avatar6,
    lastMessage: "과일 1박스에 대한 가격 조정은 어떻게 하나요?",
    timestamp: "오후 2:15",
  },
  {
    id: 17,
    nickname: "다량구매자",
    avatar: avatar7,
    lastMessage: "다량 구매 시 할인 혜택이 있는지요?",
    timestamp: "오전 9:15",
  },
  {
    id: 18,
    nickname: "양배추사랑",
    avatar: avatar8,
    lastMessage: "양배추와 오이 묶음으로 가격 조정 가능한지요?",
    timestamp: "오후 6:30",
  },
  {
    id: 19,
    nickname: "제철과일러버",
    avatar: avatar9,
    lastMessage: "제철 과일 대량 구매 시 할인 부탁드립니다.",
    timestamp: "오전 8:45",
  },
  {
    id: 20,
    nickname: "직거래팬",
    avatar: avatar10,
    lastMessage: "직거래로 구매 시 추가 할인 가능한지 확인 부탁드립니다.",
    timestamp: "오후 5:00",
  },
];
export default exampleChats;
