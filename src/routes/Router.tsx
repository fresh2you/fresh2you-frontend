import { Routes, Route } from "react-router-dom";
import { memo, Suspense, lazy } from "react";
import NotFoundPage from "../pages/NotfoundPage";
import ProtectedRoute from "@/routes/ProtectedRoute";
import PageLayout from "@/components/pageLayout/PageLayout";
// 페이지 컴포넌트들을 React.lazy로 동적으로 임포트
const SignUpPage = lazy(() => import("@/pages/signUp/SignUpPage"));
const HomePage = lazy(() => import("../pages/home/HomePage"));
const SearchPage = lazy(() => import("../pages/search/SearchPage"));
const SignInPage = lazy(() => import("../pages/signIn/SignInPage"));
const RootLayout = lazy(() => import("../components/layout/RootLayout"));
const TermsAgreementPage = lazy(() => import("@/pages/terms/TermsAgreementPage"));
const RedirectionPage = lazy(() => import("@/pages/redirection/RedirectionPage"));
const SignUpCompletePage = lazy(() => import("../pages/signUp/SignUpComplete"));
const ProductsPage = lazy(() => import("../pages/product/ProductsPage"));
const ProductDetailPage = lazy(() => import("../pages/product/ProductDetailPage"));
const ProductRegistrationPage = lazy(() => import("../pages/product/ProductRegistrationPage"));
const ProductPurchasePage = lazy(() => import("../pages/product/ProductPurchasePage"));
const PaymentCompletePage = lazy(() => import("@/pages/product/PaymentCompletePage"));
const ChatListPage = lazy(() => import("@/pages/chat/ChatListPage"));
const ChatPage = lazy(() => import("@/pages/chat/ChatPage"));
const MyPage = lazy(() => import("@/pages/mypage/mypage/MyPage"));
const PointPage = lazy(() => import("@/pages/mypage/charge/PointPage"));
const VerifySellerPage = lazy(() => import("@/pages/mypage/verifySeller/VerifySellerPage"));
const LikeListPage = lazy(() => import("@/pages/mypage/likes/LikeListPage"));
const ChangePasswordPage = lazy(() => import("@/pages/mypage/password/ChangePasswordPage"));
const ChangeProfilePage = lazy(() => import("@/pages/mypage/profile/ChangeProfilePage"));
const DeliveriesPage = lazy(() => import("@/pages/mypage/deliveries/DeliveriesPage"));
const CommunityPage = lazy(() => import("@/pages/community/CommunityPage"));
const CommunityPostPage = lazy(() => import("@/pages/community/CommunityPostPage"));

const Router = (): JSX.Element => {
  return (
    <Suspense fallback={<div />}>
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
              <Route path="/signup/terms" element={<TermsAgreementPage />} />
              <Route path="/signup/info" element={<SignUpPage />} />
              <Route path="/signup/complete" element={<SignUpCompletePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          }
        />

        <Route element={<ProtectedRoute />}>
          <Route element={<RootLayout />}>
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
                    <Route path="/:id" element={<ProductDetailPage />} />
                    <Route path="/register" element={<ProductRegistrationPage />} />
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
                    <Route path="my-products" element={<div>내 판매 상품들</div>} />
                  </Routes>
                }
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default memo(Router);
