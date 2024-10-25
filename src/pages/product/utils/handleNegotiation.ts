import { NavigateFunction } from "react-router-dom";
const handleNegotiation = async (userInfo: ILoginMember, product: IProductList, navigate: NavigateFunction) => {
  // 채팅방 생성하는 api 바인딩 필요
  console.log(userInfo, product, navigate);
};
export default handleNegotiation;
