/* 회원가입 */
declare interface ISignUpResponse extends defaultApiResponse {
  data: object;
}

/* 포인트 충전 */
declare interface IPointChargeResponse extends defaultApiResponse {
  data: {
    chargePoint: number; // 충전액
    balance: number; // 총액
  };
}

/* 로그인(이메일) */
declare interface IEmailLoginResponse extends defaultApiResponse {
  data: null | {
    token: {
      accessToken: string;
      accessExpiredAt: string;
    };
    loginMember: {
      id: number;
      email: string;
      nickname: string;
      provider: "EMAIL" | "KAKAO" | "NAVER";
    };
  };
}

/* 소셜(카카오) 로그인 */
declare interface ISocialLoginResponse extends defaultApiResponse {
  data: {
    token: {
      accessToken: string;
      accessExpiredAt: string;
    };
    loginMember: {
      email: string;
      provider: "EMAIL" | "KAKAO" | "NAVER";
      providerId: `${number}`;
    };
    isSignup: boolean;
  };
}

/* 배송지 목록 조회 */
declare interface IGetDeliveriesResponse extends defaultApiResponse {
  data: {
    deliveryAddressId: number;
    recipientName: string;
    address: string;
    detailedAddress: string;
    postalCode: `${number}`;
    isDefault: boolean;
  };
}

/* 배송지 추가 */
declare interface IPostDeliveryResponse extends defaultApiResponse {
  data: {
    addressCount: number; // 설정된 배송지 총 개수
  };
}

/* 배송지 전체 삭제 */
declare interface IDeleteAllDeliveriesResponse extends defaultApiResponse {
  data: object;
}

/* 프로필 변경 */
declare interface IResponse extends defaultApiResponse {
  data: object;
}

/* 배송지 삭제 */
declare interface IDeleteDeliveryResponse extends defaultApiResponse {
  data: object;
}

/* 배송지 수정 */
declare interface IPatchDeliveryResponse extends defaultApiResponse {
  data: object;
}

/* 사용자 기반 추천 서비스 */
declare interface IGetRecommendProductsResponse extends defaultApiResponse {
  data: {
    products: {
      productName: string;
      productImage: string;
      sellerName: string;
      price: number;
      description: string;
    }[];

    count: number;
  };
}

/* 닉네임 중복 검사 */
declare interface ICheckNicknameResponse extends defaultApiResponse {
  data: object;
}

/* 이메일 중복 검사 */
declare interface ICheckEmailResponse extends defaultApiResponse {
  data: object;
}
