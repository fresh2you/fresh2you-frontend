import boardAPI from "@/services/api/boardAPI";
import userAPI from "@/services/api/userAPI";
import productAPI from "@/services/api/productAPI";
import chatAPI from "@/services/api/chatAPI";
import termsAPI from "@/services/api/termsAPI";
import categoryAPI from "@/services/api/categoryAPI";
import authAPI from "@/services/api/authAPI";

// 종류별 api 들을 api 객체에 담아서 사용하기
export const api = {
  user: userAPI,
  product: productAPI,
  board: boardAPI,
  chat: chatAPI,
  terms: termsAPI,
  category: categoryAPI,
  auth: authAPI,
};
