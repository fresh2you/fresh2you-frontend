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
import MyPageLayout from "@/pages/mypage/components/MyPageLayout";
import MyPage from "@/pages/mypage/mypage/MyPage";
import PointPage from "@/pages/mypage/charge/PointPage";
import VerifySellerPage from "@/pages/mypage/verifySeller/VerifySellerPage";
import LikeListPage from "@/pages/mypage/likes/LikeListPage";
import ChangePasswordPage from "@/pages/mypage/password/ChangePasswordPage";
import ChangeProfilePage from "@/pages/mypage/profile/ChangeProfilePage";

/* TODO: 라우트별 element를 임시로 채운 부분 해당 컴포넌트로 수정 */
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
      {/* TODO: 홈/검색 외에도 루트 레이아웃으로 감쌀 예정 */}
      <Route element={<RootLayout />}>
        {/* 홈페이지 & 검색페이지 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Route>

      {/* 제품 관련 페이지들 */}
      <Route path="/product" element={<RootLayout />}>
        <Route index element={<ProductsPage />} />
      </Route>

      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/product/register" element={<ProductRegistrationPage />} />
      <Route path="/product/modify" element={<div>등록한 제품 수정</div>} />
      <Route path="*" element={<NotFoundPage />} />

      {/* 구매 관련 페이지들 */}
      <Route
        path="/purchase/*"
        element={
          <Routes>
            <Route path="/:id" element={<ProductPurchasePage />} />
            <Route path="/complete" element={<PaymentCompletePage />} />
          </Routes>
        }
      />

      {/* 커뮤니티 관련 페이지들 */}
      <Route
        path="/community/*"
        element={
          <Routes>
            <Route path="/" element={<div>커뮤니티 메인 페이지</div>} />
            <Route path="/:id" element={<div>판매자 공지 톡방</div>} />
          </Routes>
        }
      />

      {/* 채팅 관련 페이지들 */}
      <Route
        path="/chatting/*"
        element={
          <Routes>
            <Route path="/" element={<div>채팅 메인 페이지</div>} />
            <Route path="/:id" element={<div>채팅방</div>} />
          </Routes>
        }
      />

      {/* 마이페이지 관련 페이지들 */}

      <Route
        path="/mypage/*"
        element={
          <Routes>
            <Route path="/profile" element={<div>프로필 수정</div>} />
            <Route path="/deliveries" element={<div>배송지 관리</div>} />
            <Route path="/my-products" element={<div>내 판매 상품들</div>} />
          </Routes>
        }
      />

      <Route path="/mypage/*" element={<MyPageLayout />}>
        <Route path="charge" element={<PointPage />} />
        <Route path="profile" element={<ChangeProfilePage />} />
        <Route path="verify-seller" element={<VerifySellerPage />} />
        <Route path="likes" element={<LikeListPage />} />
        <Route path="password" element={<ChangePasswordPage />} />
      </Route>
    </Routes>
  );
};

export default memo(Router);
