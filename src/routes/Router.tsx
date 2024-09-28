import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import SignUpPage from "../pages/signUp/SignUpPage";
import HomePage from "../pages/home/HomePage";
import SearchPage from "../pages/search/SearchPage";
import SignInPage from "../pages/signIn/SignInPage";
import RootLayout from "../components/layout/RootLayout";
import TermsAgreementPage from "@/pages/terms/TermsAgreementPage";
import RedirectionPage from "../pages/redirection/RedirectionPage";
import SignUpCompletePage from "../pages/signUp/SignUpComplete";
import NotFoundPage from "../pages/NotfoundPage";
import ProductsPage from "../pages/product/ProductsPage";
import ProductDetailPage from "../pages/product/ProductDetailPage";
import ProductRegistrationPage from "../pages/product/ProductRegistrationPage";
import ProductPurchasePage from "../pages/product/ProductPurchasePage";
import PaymentCompletePage from "@/pages/product/PaymentCompletePage";
import ChatListPage from "@/pages/chat/ChatListPage";
import ChatPage from "@/pages/chat/ChatPage";
import PageLayout from "@/components/pageLayout/PageLayout";
import MyPage from "@/pages/mypage/mypage/MyPage";
import PointPage from "@/pages/mypage/charge/PointPage";
import VerifySellerPage from "@/pages/mypage/verifySeller/VerifySellerPage";
import LikeListPage from "@/pages/mypage/likes/LikeListPage";
import ChangePasswordPage from "@/pages/mypage/password/ChangePasswordPage";
import ChangeProfilePage from "@/pages/mypage/profile/ChangeProfilePage";
import DeliveriesPage from "@/pages/mypage/deliveries/DeliveriesPage";
import CommunityPage from "@/pages/community/CommunityPage";
import CommunityPostPage from "@/pages/community/CommunityPostPage";
import ProtectedRoute from "@/routes/ProtectedRoute";

/* TODO: Route들을 묶어서 파일 관리로 수정 예정 */
const Router = (): JSX.Element => {
  return (
    <Routes>
      {/* 404 Not Found */}
      <Route path="*" element={<NotFoundPage />} />
      {/* 로그인 & 회원가입 */}
      <Route
        path="/auth/*"
        element={
          <Routes>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/login/kakao" element={<RedirectionPage />} />
            {/* TODO: 약관동의의 경우 소셜에서 온것인지 판별 필요 */}
            <Route path="/signup/terms" element={<TermsAgreementPage />} />
            <Route path="/signup/info" element={<SignUpPage />} />
            <Route path="/signup/complete" element={<SignUpCompletePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        }
      />

      {/* TODO: 여기 아래로는 ProtectedRoute 컴포넌트로 감쌀 예정 */}
      <Route element={<ProtectedRoute />}>
        {/* TODO: 홈/검색 외에도 루트 레이아웃으로 감쌀 예정 */}
        <Route element={<RootLayout />}>
          {/* FNB를 갖는 모바일 메뉴 메인 페이지들 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/chatting" element={<ChatListPage />} />
          <Route path="/mypage" element={<MyPage />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />

          {/* FNB가 없는 기본 페이지 레이아웃 */}
          <Route path="/*" element={<PageLayout />}>
            {/* 제품 관련 페이지들 */}
            <Route
              path="product/*"
              element={
                <Routes>
                  <Route path="product/:id" element={<ProductDetailPage />} />
                  <Route path="product/register" element={<ProductRegistrationPage />} />
                  {/* 제품 등록 페이지 재사용 예정 */}
                  <Route path="product/modify" element={<div>등록한 제품 수정</div>} />
                </Routes>
              }
            />

            {/* 커뮤니티 관련 페이지들 */}
            <Route path="community/:id" element={<CommunityPostPage />} />

            {/* 구매 관련 페이지들 */}
            <Route
              path="purchase/*"
              element={
                <Routes>
                  <Route path="/:id" element={<ProductPurchasePage />} />
                  <Route path="/complete" element={<PaymentCompletePage />} />
                </Routes>
              }
            />

            {/* 채팅 관련 페이지들 */}
            <Route path="chatting/:id" element={<ChatPage />} />

            {/* 마이페이지 관련 페이지들 */}
            <Route
              path="mypage/*"
              element={
                <Routes>
                  <Route path="charge" element={<PointPage />} />
                  <Route path="profile" element={<ChangeProfilePage />} />
                  <Route path="verify-seller" element={<VerifySellerPage />} />
                  <Route path="likes" element={<LikeListPage />} />
                  <Route path="deliveries" element={<DeliveriesPage />} />
                  <Route path="password" element={<ChangePasswordPage />} />
                  {/* API 미구현 페이지 */}
                  <Route path="my-products" element={<div>내 판매 상품들</div>} />
                </Routes>
              }
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default memo(Router);
