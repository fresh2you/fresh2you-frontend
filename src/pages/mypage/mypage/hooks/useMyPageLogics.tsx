import IconHeart from "icons/menu-heart.svg";
import IconChangePW from "icons/menu-changePW.svg";
import IconDelivery from "icons/menu-delivery.svg";
import IconLogout from "icons/menu-logout.svg";
import IconRegister from "icons/menu-register.svg";
import IconList from "icons/menu-product-list.svg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { removeLocalStorage } from "@/utils/storageUtils";
import userAPI from "@/services/api/userAPI";

const useMyPageLogics = () => {
  const navigate = useNavigate();

  const moveToPath = (path: string) => {
    navigate(path);
  };

  const logout = () => {
    // 로그아웃 로직
    removeLocalStorage();
    window.location.href = "auth/signin";
  };

  const { data: userInfo } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const { data: result } = await userAPI.getUserInfo();

      return result.loginMember;
    },
    enabled: true,
    staleTime: 60 * 1000,
  });

  const commonMenu = [
    {
      id: 1,
      name: "찜 목록",
      path: "/mypage/likes",
      iconComponent: <IconHeart className="w-8 h-8 dark:text-white" />,
      ariaLabel: "찜 목록 페이지로 이동",
    },
    {
      id: 2,
      name: "내 배송지 관리",
      path: "/mypage/deliveries",
      iconComponent: <IconDelivery className="w-8 h-8 dark:text-white" />,
      ariaLabel: "내 배송지 관리 페이지로 이동",
    },
    {
      id: 3,
      name: "비밀번호 변경",
      path: "/mypage/password",
      iconComponent: <IconChangePW className="w-8 h-8 dark:text-white" />,
      ariaLabel: "비밀번호 변경하기",
    },
    {
      id: 4,
      name: "로그아웃",
      path: null,
      iconComponent: <IconLogout className="w-8 h-8 dark:text-white" />,
      onClick: logout,
      ariaLabel: "로그아웃 하기",
    },
  ];

  const sellerMenu = [
    {
      id: 1,
      name: "상품 등록",
      path: "/product/register",
      iconComponent: <IconRegister className="w-8 h-8 dark:text-white" />,
      ariaLabel: "상품 등록 페이지로 이동",
    },
    {
      id: 2,
      name: "상품 목록 및 상품 수정",
      path: "/mypage/my-products",
      iconComponent: <IconList className="w-8 h-8 dark:text-white" />,
      ariaLabel: "상품 목록 및 상품 수정 페이지로 이동",
    },
  ];

  return { moveToPath, logout, commonMenu, sellerMenu, userInfo };
};

export default useMyPageLogics;
