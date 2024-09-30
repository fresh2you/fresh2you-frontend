import { removeLocalStorage } from "@/utils/storageUtils";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const accessToken = localStorage.getItem("accessToken");
  const tokenExpirationTime = localStorage.getItem("accessExpiredAt");
  const currentTime = new Date();

  if (!accessToken || !tokenExpirationTime || new Date(tokenExpirationTime) < currentTime) {
    // 토큰이 없거나 만료됐으면 로그인 페이지로 이동
    removeLocalStorage();

    return <Navigate to="/auth/signin" replace />;
  }
  // 토큰이 있거나 아직 유효하다면 자식 라우트를 렌더링
  return <Outlet />;
};

export default ProtectedRoute;
