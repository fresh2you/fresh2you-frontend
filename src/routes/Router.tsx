import { Routes, Route } from 'react-router-dom';
import { memo } from 'react';

import HomePage from '../pages/home/HomePage';
import SearchPage from '../pages/search/SearchPage';
import RootLayout from '../components/layout/RootLayout';

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
            <Route path="/signin" element={<div>로그인</div>} />
            <Route path="/oauth" element={<div>소셜 로그인</div>} />
            {/* TODO: 약관동의의 경우 소셜에서 온것인지 판별 필요 */}
            <Route path="/signup/terms" element={<div>약관 동의</div>} />
            <Route path="/signup/info" element={<div>회원가입 정보 입력</div>} />
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
            <Route path="/" element={<div>마이페이지 메인 페이지</div>} />
            <Route path="/charge" element={<div>포인트 충전</div>} />
            <Route path="/profile" element={<div>프로필 수정</div>} />
            <Route path="/password" element={<div>비밀번호 수정</div>} />
            <Route path="/verify-seller" element={<div>판매자 인증</div>} />
            <Route path="/likes" element={<div>찜 목록</div>} />
            <Route path="/deliveries" element={<div>배송지 관리</div>} />
            <Route path="/my-products" element={<div>내 판매 상품들</div>} />
          </Routes>
        }
      />
    </Routes>
  );
};

export default memo(Router);
