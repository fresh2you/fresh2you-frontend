import IconHeart from "icons/heart.svg";
import IconChange from "icons/change.svg";
import IconDelivery from "icons/delivery.svg";
import IconLogout from "icons/logout.svg";
import IconBox from "icons/carbonBox.svg";
import IconList from "icons/list.svg";
import { useNavigate } from "react-router-dom";
import { instance } from "@/instance";
import { useQuery } from "@tanstack/react-query";

interface UserInfoTypes {
  id: number;
  nickname: number;
  email: number;
  point: number;
  image: string | null;
  role: "buyer" | "seller";
}

const useMyPageLogics = () => {
  const navigate = useNavigate();

  const moveToPath = (path: string) => {
    navigate(path);
  };

  const logout = () => {
    // 로그아웃 로직
    console.log("로그아웃");
  };

  const { data: userInfo } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const { data: result } = await instance.get<UserInfoTypes>("/userInfo");

      return result;
    },
    enabled: true,
    staleTime: 60 * 1000,
  });

  const commonMenu = [
    { id: 1, name: "찜 목록", path: "/mypage/likes", iconComponent: <IconHeart /> },
    { id: 2, name: "내 배송지 관리", path: "/mypage/deliveries", iconComponent: <IconDelivery /> },
    { id: 3, name: "비밀번호 변경", path: "/mypage/password", iconComponent: <IconChange /> },
    { id: 4, name: "로그아웃", path: null, iconComponent: <IconLogout />, onClick: logout },
  ];

  const sellerMenu = [
    { id: 1, name: "상품 등록", path: "/product/register", iconComponent: <IconBox /> },
    {
      id: 2,
      name: "상품 목록 및 상품 수정",
      path: "/mypage/my-products",
      iconComponent: <IconList />,
    },
  ];

  return { moveToPath, logout, commonMenu, sellerMenu, userInfo };
};

export default useMyPageLogics;
