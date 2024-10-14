/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** 제품 등록 요청 */
export interface AddProductRequest {
  name: string;
  /** @format int32 */
  quantity: number;
  description: string;
  price: number;
  /** @format int64 */
  categoryId: number;
}

/** 제품 등록 응답 */
export interface AddProductResponse {
  /**
   * 제품 ID
   * @format int64
   */
  id?: number;
  /** 제품 이름 */
  name?: string;
  /**
   * 제품 등록 시간
   * @format date-time
   */
  createdAt?: string;
}

export interface ApiResponseAddProductResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 제품 등록 응답 */
  data?: AddProductResponse;
}

export interface ApiResponseLikeProductResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 좋아요 요청 응답 */
  data?: LikeProductResponse;
}

/** 좋아요 요청 응답 */
export interface LikeProductResponse {
  /**
   * 상품 좋아요 ID
   * @format int64
   */
  productLikeId?: number;
  /**
   * 상품 ID
   * @format int64
   */
  productId?: number;
  /** 상품명 */
  productName?: string;
  /**
   * 좋아요 누른 시간
   * @format date-time
   */
  likedAt?: string;
}

export interface BuyProductRequest {
  /**
   * 배송정보 ID
   * @format int64
   */
  deliveryAddressId: number;
  /**
   * 수량
   * @format int32
   */
  quantity: number;
}

export interface ApiResponseBuyProductResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 상품 구매 응답 */
  data?: BuyProductResponse;
}

/** 상품 구매 응답 */
export interface BuyProductResponse {
  /** @format int64 */
  productOrderId?: number;
  productName?: string;
  buyerName?: string;
  totalPrice?: number;
}

export interface SignUpRequest {
  email: string;
  password?: string;
  confirmPassword?: string;
  nickname: string;
  termsAgreements: TermsAgreementDto[];
  provider: "EMAIL" | "KAKAO" | "NAVER";
  providerId?: string;
}

export interface TermsAgreementDto {
  /** @format int64 */
  termsId: number;
  isAgreed: boolean;
}

export interface ApiResponseSignupResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 회원가입 응답 */
  data?: SignupResponse;
}

/** 회원가입 응답 */
export interface SignupResponse {
  /**
   * 회원 고유 번호
   * @format int64
   * @example 24
   */
  memberId?: number;
  /** 로그인 유저의 검증을 위한 토큰 */
  token?: Token;
}

/** 로그인 유저의 검증을 위한 토큰 */
export interface Token {
  /** ACCESS 토큰 */
  accessToken?: string;
  /**
   * 만료 시간
   * @format date-time
   */
  accessExpiredAt?: string;
}

export interface ChargePointRequest {
  /** @min 0 */
  point: number;
}

export interface ApiResponseChargePointResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 응답 결과 */
  data?: ChargePointResponse;
}

/** 응답 결과 */
export interface ChargePointResponse {
  /** 충전액 */
  chargePoint?: number;
  /** 총액 */
  balance?: number;
}

export interface LoginRequest {
  /**
   * 로그인할 이메일
   * @default "fresh2you@naver.com"
   */
  email?: string;
  /**
   * 비밀번호
   * @minLength 8
   * @maxLength 16
   * @default "fresh2you!"
   * @pattern ^(?=.*[a-zA-Z])(?=.*\d)(?!.*\s).+$
   */
  password?: string;
}

export interface ApiResponseLoginResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 로그인 응답 */
  data?: LoginResponse;
}

/** 로그인된 유저의 정보 */
export interface LoginMember {
  /**
   * 고유 번호
   * @format int64
   * @example 14
   */
  id?: number;
  /**
   * 이메일
   * @example "fresh2you@naver.com"
   */
  email?: string;
  /**
   * 닉네임
   * @example "농부"
   */
  nickname?: string;
  /**
   * 가입 경로
   * @example "KAKAO"
   */
  provider?: "EMAIL" | "KAKAO" | "NAVER";
  /** 프로필 이미지 */
  profileImage?: string;
  /** 판매자 여부 */
  isSeller?: boolean;
  /** 포인트 */
  point?: number;
}

/** 로그인 응답 */
export interface LoginResponse {
  /** 로그인 유저의 검증을 위한 토큰 */
  token?: Token;
  /** 로그인된 유저의 정보 */
  loginMember?: LoginMember;
}

/** 소셜 로그인 요청 */
export interface OauthLoginRequest {
  code: string;
  redirectUri: string;
  provider: "EMAIL" | "KAKAO" | "NAVER";
}

export interface ApiResponseOauthLoginResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 로그인 응답 */
  data?: OauthLoginResponse;
}

/** 로그인된 유저의 정보 */
export interface OauthLoginMember {
  /**
   * 고유 번호
   * @format int64
   * @example 14
   */
  id?: number;
  /**
   * 이메일
   * @example "fresh2you@naver.com"
   */
  email?: string;
  /**
   * 닉네임
   * @example "농부"
   */
  nickname?: string;
  /**
   * 가입 경로(소셜)
   * @example "KAKAO"
   */
  provider?: "EMAIL" | "KAKAO" | "NAVER";
  /**
   * 소셜 고유 번호
   * @example "210412"
   */
  providerId?: string;
  /** 프로필 이미지 */
  profileImage?: string;
  /** 판매자 여부 */
  isSeller?: boolean;
  /** 포인트 */
  point?: number;
}

/** 로그인 응답 */
export interface OauthLoginResponse {
  /** 로그인 유저의 검증을 위한 토큰 */
  token?: Token;
  /** 로그인된 유저의 정보 */
  loginMember?: OauthLoginMember;
  /** 서비스 회원 가입 여부 */
  isSignup?: boolean;
}

/** 배송지 추가 요청 */
export interface AddDeliveryAddressRequest {
  /**
   * 받는 사람 이름
   * @example "홍길동"
   */
  recipientName?: string;
  /**
   * 전화번호
   * @example "01012345678"
   */
  phone?: string;
  /**
   * 주소
   * @example "경기도 광명시 철산동"
   */
  address?: string;
  /**
   * 상세 주소
   * @example "땡땡 아파트 104동 705호"
   */
  detailedAddress?: string;
  /**
   * 우편 번호
   * @example "14888"
   */
  postalCode?: string;
  /**
   * 기본 배송지 여부
   * @example true
   */
  isDefault?: boolean;
}

/** 배송지 추가 응답 */
export interface AddDeliveryAddressResponse {
  /**
   * 설정된 배송지 개수
   * @format int64
   * @example 3
   */
  addressCount?: number;
}

export interface ApiResponseAddDeliveryAddressResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 배송지 추가 응답 */
  data?: AddDeliveryAddressResponse;
}

export interface ApiResponseVoid {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 응답 결과 */
  data?: object;
}

export interface ChatRoomRequest {
  buyerName?: string;
  sellerName?: string;
  /** @format int64 */
  buyerId?: number;
  /** @format int64 */
  sellerId?: number;
  /** @format int64 */
  productId?: number;
  /** @format int64 */
  categoryId?: number;
}

export interface ApiResponseChatRoomResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 응답 결과 */
  data?: ChatRoomResponse;
}

/** 응답 결과 */
export interface ChatRoomResponse {
  /** @format int64 */
  chatRoomId?: number;
  status?: string;
}

export interface ApiResponseObject {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 응답 결과 */
  data?: object;
}

/** 게시판 생성 요청 */
export interface AddBoardRequest {
  /** 게시판 제목 */
  title: string;
  /**
   * 상품 ID
   * @format int64
   */
  productId?: number;
}

/** 게시판 생성 응답 */
export interface AddBoardResponse {
  /** @format int64 */
  boardId?: number;
  title?: string;
  /** @format date-time */
  createdAt?: string;
}

export interface ApiResponseAddBoardResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 게시판 생성 응답 */
  data?: AddBoardResponse;
}

/** 게시글 추가 요청 */
export interface AddBoardMessageRequest {
  /**
   * 게시글 타입
   * @default "TEXT"
   */
  messageType: "TEXT" | "IMAGE";
  /** 게시글 내용 */
  content: string;
}

/** 게시판 생성 응답 */
export interface AddBoardMessageResponse {
  /**
   * 게시글 ID
   * @format int64
   */
  boardMessageId?: number;
  /** 게시글 타입 */
  messageType?: "TEXT" | "IMAGE";
  /** 게시글 내용 */
  content?: string;
  /**
   * 게시글 생성 시간
   * @format date-time
   */
  createdAt?: string;
}

export interface ApiResponseAddBoardMessageResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 게시판 생성 응답 */
  data?: AddBoardMessageResponse;
}

/** 상품 수정 요청 */
export interface UpdateProductRequest {
  /** 상품명 */
  name?: string;
  /** 상품 설명 */
  description?: string;
  /**
   * 재고
   * @format int32
   */
  quantity?: number;
  /** 가격 */
  price?: number;
  /**
   * 카테고리 ID
   * @format int64
   */
  categoryId?: number;
}

export interface ApiResponseUpdateProductResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 상품 수정 응답 */
  data?: UpdateProductResponse;
}

/** 상품 수정 응답 */
export interface UpdateProductResponse {
  /**
   * 상품 ID
   * @format int64
   */
  productId?: number;
}

/** 프로필 변경 요청 */
export interface UpdateProfileRequest {
  /**
   * 닉네임
   * @minLength 0
   * @maxLength 20
   * @example "장아찌"
   */
  nickname: string;
}

/** 배송지 수정 요청 */
export interface ModifyDeliveryAddressRequest {
  /**
   * 받는 사람 이름
   * @example "홍길동"
   */
  recipientName?: string;
  /**
   * 전화번호
   * @example "01012345678"
   */
  phone?: string;
  /**
   * 주소
   * @example "경기도 광명시 철산동"
   */
  address?: string;
  /**
   * 상세 주소
   * @example "땡땡 아파트 104동 705호"
   */
  detailedAddress?: string;
  /**
   * 우편 번호
   * @example "14888"
   */
  postalCode?: string;
  /**
   * 기본 배송지 여부
   * @example true
   */
  isDefault?: boolean;
}

/** 게시판 수정 요청 */
export interface UpdateBoardRequest {
  /** 게시판 제목 */
  title: string;
}

export interface ApiResponseUpdateBoardResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 게시판 수정 응답 */
  data?: UpdateBoardResponse;
}

/** 게시판 수정 응답 */
export interface UpdateBoardResponse {
  /**
   * 게시판 ID
   * @format int64
   */
  boardId?: number;
  /** 게시판명 */
  title?: string;
  /**
   * 게시판 수정 시간
   * @format date-time
   */
  updatedAt?: string;
}

export interface ApiResponseGetAllTermsResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 응답 결과 */
  data?: GetAllTermsResponse;
}

/** 응답 결과 */
export interface GetAllTermsResponse {
  termsList?: TermsDto[];
}

export interface TermsDto {
  /** @format int64 */
  termsId?: number;
  title?: string;
  isRequired?: boolean;
  content?: string;
}

export interface ApiResponseGetTermsByIdResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 응답 결과 */
  data?: GetTermsByIdResponse;
}

/** 응답 결과 */
export interface GetTermsByIdResponse {
  title?: string;
  content?: string;
  isRequired?: boolean;
}

/** 상품 추천 서비스 요청 */
export interface LoadProductRecommendListRequest {
  /**
   * 노출 가능한 목록의 개수
   * @format int32
   * @min 1
   * @max 10
   */
  size: number;
}

export interface ApiResponseLoadProductRecommendListResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 상품 추천 서비스 응답 */
  data?: LoadProductRecommendListResponse;
}

/** 상품 추천 서비스 응답 */
export interface LoadProductRecommendListResponse {
  /** 상품 목록 */
  products?: RecommendProductSummary[];
  /**
   * 상품 개수
   * @format int32
   */
  count?: number;
}

/** 상품 추천 목록 조회시 사용되는 상품 정보 */
export interface RecommendProductSummary {
  /**
   * 상품 고유 번호
   * @format int64
   */
  productId?: number;
  /** 상품명 */
  productName?: string;
  /** 상품 썸네일 */
  productImage?: string;
  /** 판매자명 */
  sellerName?: string;
  /** 판매 가격 */
  price?: number;
  /** 설명 (최대 20글자) */
  description?: string;
}

/** 상품 목록 조회 시 사용하는 요청 */
export interface GetAllProductByConditionsRequest {
  /**
   * 카테고리 ID
   * @format int64
   */
  categoryId?: number;
  /** 검색어 */
  keyword?: string;
  /**
   * 페이지 번호
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * 페이지 크기
   * @format int32
   * @default 20
   */
  size?: number;
}

export interface ApiResponseGetAllProductByConditionsResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 상품 목록 조회 시 사용하는 응답 */
  data?: GetAllProductByConditionsResponse;
}

/** 상품 목록 조회 시 사용하는 응답 */
export interface GetAllProductByConditionsResponse {
  /** 상품 목록 */
  productList?: ProductByConfitionsDto[];
  /**
   * 현재 페이지 번호
   * @format int32
   */
  pageNumber?: number;
  /**
   * 현재 페이지 크기
   * @format int32
   */
  pageSize?: number;
  /**
   * 전체 페이지 번호
   * @format int32
   */
  totalPageNumber?: number;
}

/** 상품 목록 */
export interface ProductByConfitionsDto {
  /**
   * 상품 ID
   * @format int64
   */
  productId?: number;
  /** 판매자이름 */
  sellerName?: string;
  /** 상품명 */
  productName?: string;
  /** 상품 설명 */
  productDescription?: string;
  /**
   * 수량
   * @format int32
   */
  quantity?: number;
  /** 가격 */
  price?: number;
  /** 사진 */
  imageUrl?: string;
}

export interface ApiResponseGetProductDetailResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 제품 상세 조회 응답 */
  data?: GetProductDetailResponse;
}

/** 제품 상세 조회 응답 */
export interface GetProductDetailResponse {
  /**
   * 상품 ID
   * @format int64
   */
  productId?: number;
  /** 상품명 */
  productName?: string;
  /** 판매자명 */
  sellerName?: string;
  /** 가격 */
  price?: number;
  /**
   * 재고
   * @format int32
   */
  quantity?: number;
  /** 제품 설명 */
  description?: string;
  /** 제품 url */
  imageUrl?: string;
}

/** 상품 목록 조회 시 사용하는 요청 */
export interface GetSellerProducts {
  /**
   * 페이지 번호
   * @format int32
   * @default 0
   */
  page?: number;
  /**
   * 페이지 크기
   * @format int32
   * @default 20
   */
  size?: number;
}

export interface ApiResponseFindAllProductLikeResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 좋아요한 상품 목록 응답 */
  data?: FindAllProductLikeResponse;
}

/** 좋아요한 상품 목록 응답 */
export interface FindAllProductLikeResponse {
  productList?: ProductByLikeDto[];
}

/** 좋아요한 상품 응답 */
export interface ProductByLikeDto {
  /**
   * 상품 ID
   * @format int64
   */
  productId?: number;
  /** 상품명 */
  productName?: string;
  /** 사진 */
  imageUrl?: string;
  /** 가격 */
  price?: number;
}

export interface ApiResponseLoadProfileResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 회원 정보 조회 응답 */
  data?: LoadProfileResponse;
}

/** 회원 정보 조회 응답 */
export interface LoadProfileResponse {
  /** 로그인된 유저의 정보 */
  loginMember?: LoginMember;
}

export interface AddressDto {
  /** @format int64 */
  deliveryAddressId?: number;
  recipientName?: string;
  address?: string;
  phoneNumber?: string;
  detailedAddress?: string;
  postalCode?: string;
  isDefault?: boolean;
}

export interface ApiResponseGetAllAddressResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 응답 결과 */
  data?: GetAllAddressResponse;
}

/** 응답 결과 */
export interface GetAllAddressResponse {
  addressList?: AddressDto[];
}

export interface ApiResponseListChatMessageDto {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 응답 결과 */
  data?: ChatMessageDto[];
}

/** 응답 결과 */
export interface ChatMessageDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  senderId?: number;
  name?: string;
  message?: string;
}

export interface ApiResponseGetAllCategoryResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 응답 결과 */
  data?: GetAllCategoryResponse;
}

export interface CategoryDto {
  /**
   * 카테고리 ID
   * @format int64
   */
  categoryId?: number;
  /** 카테고리 이름 */
  categoryName?: string;
  /** 하위 카테고리 목록 */
  subCategories?: SubCategoryDto[];
}

/** 응답 결과 */
export interface GetAllCategoryResponse {
  categories?: CategoryDto[];
}

/** 하위 카테고리 목록 */
export interface SubCategoryDto {
  /** @format int64 */
  categoryId?: number;
  categoryName?: string;
}

export interface ApiResponseGetAllBoardResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 응답 결과 */
  data?: GetAllBoardResponse;
}

export interface BoardListResponse {
  /** @format int64 */
  boardId?: number;
  title?: string;
  /** @format date-time */
  lastMessagedAt?: string;
}

/** 응답 결과 */
export interface GetAllBoardResponse {
  boardList?: BoardListResponse[];
}

export interface ApiResponseGetBoardMessagesResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 응답 결과 */
  data?: GetBoardMessagesResponse;
}

export interface BoardMessageListResponse {
  /** @format int64 */
  boardMessageId?: number;
  messageType?: "TEXT" | "IMAGE";
  content?: string;
  isDeleted?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** 내가 쓴 게시글 여부 */
  isMine?: boolean;
}

/** 응답 결과 */
export interface GetBoardMessagesResponse {
  boardMessageList?: BoardMessageListResponse[];
}

/** 상품 삭제 요청 */
export interface DeleteProductRequest {
  /**
   * 삭제할 상품 ID
   * @format int64
   */
  productId?: number;
}

export interface ApiResponseDeleteProductResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 상품 삭제 응답 */
  data?: DeleteProductResponse;
}

/** 상품 삭제 응답 */
export interface DeleteProductResponse {
  /**
   * 삭제된 상품 ID
   * @format int64
   */
  productId?: number;
}

export interface ApiResponseDeleteBoardResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 게시판 삭제 응답 */
  data?: DeleteBoardResponse;
}

/** 게시판 삭제 응답 */
export interface DeleteBoardResponse {
  /**
   * 삭제한 게시판 ID
   * @format int64
   */
  boardId?: number;
  /**
   * 삭제 시간
   * @format date-time
   */
  deletedAt?: string;
}

export interface ApiResponseDeleteBoardMessageResponse {
  /**
   * 성공 여부
   * @example true
   */
  success?: boolean;
  /**
   * 코드
   * @example "0200"
   */
  code?: string;
  /**
   * 응답 메세지
   * @example "성공했습니다."
   */
  message?: string;
  /** 응답 결과 */
  data?: DeleteBoardMessageResponse;
}

/** 응답 결과 */
export interface DeleteBoardMessageResponse {
  /** @format int64 */
  messageId?: number;
  /** @format date-time */
  deletedAt?: string;
}

export type GetAllProductByConditionsData = ApiResponseGetAllProductByConditionsResponse;

export interface AddProductPayload {
  /** 제품 등록 요청 */
  request: AddProductRequest;
  /** @format binary */
  image?: File;
}

export type AddProductData = ApiResponseAddProductResponse;

export type DeleteProductData = ApiResponseDeleteProductResponse;

export type SetProductLikeData = ApiResponseLikeProductResponse;

export type SetProductUnLikeData = ApiResponseVoid;

export type BuyProductData = ApiResponseBuyProductResponse;

export type SignupData = ApiResponseSignupResponse;

export type ChargePointData = ApiResponseChargePointResponse;

export type LoginWithEmailData = ApiResponseLoginResponse;

export type LoginWithKakaoData = ApiResponseOauthLoginResponse;

export type GetDeliveryAddressesData = ApiResponseGetAllAddressResponse;

export type AddDeliveryAddressData = ApiResponseAddDeliveryAddressResponse;

export type DeleteDeliveryAddressData = ApiResponseVoid;

export type LeaveChatRoomData = ApiResponseVoid;

export type CreateOneToOneChatRoomData = ApiResponseChatRoomResponse;

export type CreateOneToManyChatRoomData = ApiResponseChatRoomResponse;

export type BlockUserData = ApiResponseObject;

export type UnblockUserData = ApiResponseObject;

export type GetAllBoardData = ApiResponseGetAllBoardResponse;

export type AddProduct1Data = ApiResponseAddBoardResponse;

export type GetAllBoard1Data = ApiResponseGetBoardMessagesResponse;

export interface AddBoardMessagePayload {
  /** 게시글 추가 요청 */
  request: AddBoardMessageRequest;
  /** @format binary */
  image?: File;
}

export type AddBoardMessageData = ApiResponseAddBoardMessageResponse;

export type SendVerificationCodeData = ApiResponseVoid;

export type VerifySmsCodeData = ApiResponseVoid;

export type SendVerificationCode1Data = ApiResponseVoid;

export type VerifyEmailCodeData = ApiResponseVoid;

export type GetProductData = ApiResponseGetProductDetailResponse;

export interface UpdateProductPayload {
  /** 상품 수정 요청 */
  request?: UpdateProductRequest;
  /** @format binary */
  image?: File;
}

export type UpdateProductData = ApiResponseUpdateProductResponse;

export type LoadProfileData = ApiResponseLoadProfileResponse;

export interface UpdateProfilePayload {
  /** 프로필 변경 요청 */
  request?: UpdateProfileRequest;
  /** @format binary */
  image?: File;
}

export type UpdateProfileData = ApiResponseVoid;

export type DeleteDeliveryAddress1Data = ApiResponseVoid;

export type ModifyDeliveryAddressData = ApiResponseVoid;

export type DeleteBoardData = ApiResponseDeleteBoardResponse;

export type UpdateBoardData = ApiResponseUpdateBoardResponse;

export type GetAllTermsData = ApiResponseGetAllTermsResponse;

export type GetTermsByIdData = ApiResponseGetTermsByIdResponse;

export type LoadRandomProductRecommendListData = ApiResponseLoadProductRecommendListResponse;

export type LoadProductRecommendListData = ApiResponseLoadProductRecommendListResponse;

export type GetSellerProductsData = ApiResponseGetAllProductByConditionsResponse;

export type GetAllProductByLikeData = ApiResponseFindAllProductLikeResponse;

export type CheckNicknameAvailabilityData = ApiResponseVoid;

export type CheckEmailAvailabilityData = ApiResponseVoid;

export type GetChatMessagesData = ApiResponseListChatMessageDto;

export type GetAllCategoriesData = ApiResponseGetAllCategoryResponse;

export type WithdrawMemberData = ApiResponseVoid;

export type DeleteBoardMessageData = ApiResponseDeleteBoardMessageResponse;
