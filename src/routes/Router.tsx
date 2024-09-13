import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import SignUpPage from "../pages/signUp/SignUpPage";
import HomePage from "../pages/home/HomePage";
import SearchPage from "../pages/search/SearchPage";
import SignInPage from "../pages/signIn/SignInPage";
import RootLayout from "../components/layout/RootLayout";
import TermsAgreementPage from "@/pages/terms/TermsAgreementPage";
import MyPageLayout from "@/pages/mypage/components/MyPageLayout";
import MyPage from "@/pages/mypage/mypage/MyPage";
import PointPage from "@/pages/mypage/charge/PointPage";
import VerifySellerPage from "@/pages/mypage/verifySeller/VerifySellerPage";
import LikeListpage from "@/pages/mypage/likes/LikeListpage";
/* TODO: 라우트별 element를 임시로 채운 부분 해당 컴포넌트로 수정 */
/* TODO: Route들을 묶어서 파일 관리로 수정 예정 */
const Router = (): JSX.Element => {
  return (
    <Routes>
      {/* 404 Not Found */}
      <Route path="*" element={<div>404</div>} />

      {/* 로그인 & 회원가입 */}
      <Route
        path="/auth/*"
        element={
          <Routes>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/oauth" element={<div>소셜 로그인</div>} />
            {/* TODO: 약관동의의 경우 소셜에서 온것인지 판별 필요 */}
            <Route path="/signup/terms" element={<TermsAgreementPage />} />
            <Route path="/signup/info" element={<SignUpPage />} />
            <Route path="/signup/complete" element={<div>회원가입 완료</div>} />
            <Route path="*" element={<div>404</div>} />
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
      <Route
        path="/product/*"
        element={
          <Routes>
            <Route path="/" element={<div>전체 상품</div>} />
            <Route path="/:id" element={<div>특정 상품 상세</div>} />
            <Route path="/register" element={<div>제품 등록</div>} />
            <Route path="/modify" element={<div>등록한 제품 수정</div>} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        }
      />

      {/* 구매 관련 페이지들 */}
      <Route
        path="/purchase/*"
        element={
          <Routes>
            <Route path="/:id" element={<div>상품 구매 진행</div>} />
            <Route path="/complete" element={<div>상품 구매 완료</div>} />
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
            <Route path="/password" element={<div>비밀번호 수정</div>} />
            <Route path="/deliveries" element={<div>배송지 관리</div>} />
            <Route path="/my-products" element={<div>내 판매 상품들</div>} />
          </Routes>
        }
      />

      <Route path="/mypage/*" element={<MyPageLayout />}>
        <Route path="charge" element={<PointPage />} />
        <Route path="verify-seller" element={<VerifySellerPage />} />
        <Route path="likes" element={<LikeListpage />} />
      </Route>
    </Routes>
  );
};

export default memo(Router);
