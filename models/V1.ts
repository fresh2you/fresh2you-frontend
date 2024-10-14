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

import {
  AddBoardMessageData,
  AddBoardMessagePayload,
  AddBoardRequest,
  AddDeliveryAddressData,
  AddDeliveryAddressRequest,
  AddProduct1Data,
  AddProductData,
  AddProductPayload,
  BlockUserData,
  BuyProductData,
  BuyProductRequest,
  ChargePointData,
  ChargePointRequest,
  ChatRoomRequest,
  CheckEmailAvailabilityData,
  CheckNicknameAvailabilityData,
  CreateOneToManyChatRoomData,
  CreateOneToOneChatRoomData,
  DeleteBoardData,
  DeleteBoardMessageData,
  DeleteDeliveryAddress1Data,
  DeleteDeliveryAddressData,
  DeleteProductData,
  DeleteProductRequest,
  GetAllBoard1Data,
  GetAllBoardData,
  GetAllCategoriesData,
  GetAllProductByConditionsData,
  GetAllProductByConditionsRequest,
  GetAllProductByLikeData,
  GetAllTermsData,
  GetChatMessagesData,
  GetDeliveryAddressesData,
  GetProductData,
  GetSellerProducts,
  GetSellerProductsData,
  GetTermsByIdData,
  LeaveChatRoomData,
  LoadProductRecommendListData,
  LoadProductRecommendListRequest,
  LoadProfileData,
  LoadRandomProductRecommendListData,
  LoginRequest,
  LoginWithEmailData,
  LoginWithKakaoData,
  ModifyDeliveryAddressData,
  ModifyDeliveryAddressRequest,
  OauthLoginRequest,
  SendVerificationCode1Data,
  SendVerificationCodeData,
  SetProductLikeData,
  SetProductUnLikeData,
  SignupData,
  SignUpRequest,
  UnblockUserData,
  UpdateBoardData,
  UpdateBoardRequest,
  UpdateProductData,
  UpdateProductPayload,
  UpdateProfileData,
  UpdateProfilePayload,
  VerifyEmailCodeData,
  VerifySmsCodeData,
  WithdrawMemberData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class V1<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 상품 API
   * @name GetAllProductByConditions
   * @request GET:/v1/api/products
   * @secure
   * @response `200` `GetAllProductByConditionsData` OK
   */
  getAllProductByConditions = (
    query: {
      /** 상품 목록 조회 시 사용하는 요청 */
      request: GetAllProductByConditionsRequest;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetAllProductByConditionsData, any>({
      path: `/v1/api/products`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 상품을 등록합니다.
   *
   * @tags 상품 API
   * @name AddProduct
   * @summary 상품 등록
   * @request POST:/v1/api/products
   * @secure
   * @response `200` `AddProductData` OK
   */
  addProduct = (data: AddProductPayload, params: RequestParams = {}) =>
    this.request<AddProductData, any>({
      path: `/v1/api/products`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description 상품 삭제를 위한 API입니다.
   *
   * @tags 상품 API
   * @name DeleteProduct
   * @summary 상품 삭제
   * @request DELETE:/v1/api/products
   * @secure
   * @response `200` `DeleteProductData` OK
   */
  deleteProduct = (
    query: {
      /** 상품 삭제 요청 */
      request: DeleteProductRequest;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteProductData, any>({
      path: `/v1/api/products`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 상품 좋아요 추가
   *
   * @tags 상품 API
   * @name SetProductLike
   * @summary 상품 좋아요
   * @request POST:/v1/api/products/{productId}/like
   * @secure
   * @response `200` `SetProductLikeData` OK
   */
  setProductLike = (productId: number, params: RequestParams = {}) =>
    this.request<SetProductLikeData, any>({
      path: `/v1/api/products/${productId}/like`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description 상품의 좋아요 삭제
   *
   * @tags 상품 API
   * @name SetProductUnLike
   * @summary 상품 좋아요 취소
   * @request DELETE:/v1/api/products/{productId}/like
   * @secure
   * @response `200` `SetProductUnLikeData` OK
   */
  setProductUnLike = (productId: number, params: RequestParams = {}) =>
    this.request<SetProductUnLikeData, any>({
      path: `/v1/api/products/${productId}/like`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description 상품 구매를 위한 API입니다.
   *
   * @tags 상품 API
   * @name BuyProduct
   * @summary 상품 구매
   * @request POST:/v1/api/products/{productId}/buy
   * @secure
   * @response `200` `BuyProductData` OK
   */
  buyProduct = (productId: number, data: BuyProductRequest, params: RequestParams = {}) =>
    this.request<BuyProductData, any>({
      path: `/v1/api/products/${productId}/buy`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 이메일회원가입, Oauth2회원가입에 사용되는 API입니다
   *
   * @tags 사용자 API
   * @name Signup
   * @summary 회원 가입
   * @request POST:/v1/api/members/signup
   * @secure
   * @response `200` `SignupData` OK
   */
  signup = (data: SignUpRequest, params: RequestParams = {}) =>
    this.request<SignupData, any>({
      path: `/v1/api/members/signup`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 사용자의 포인트 충전을 위한 API 입니다.
   *
   * @tags 사용자 API
   * @name ChargePoint
   * @summary 포인트 충전
   * @request POST:/v1/api/members/point-charge
   * @secure
   * @response `200` `ChargePointData` OK
   */
  chargePoint = (data: ChargePointRequest, params: RequestParams = {}) =>
    this.request<ChargePointData, any>({
      path: `/v1/api/members/point-charge`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 이메일 가입 회원의 로그인을 진행한다.
   *
   * @tags 사용자 API
   * @name LoginWithEmail
   * @summary 로그인
   * @request POST:/v1/api/members/login
   * @secure
   * @response `200` `LoginWithEmailData` OK
   */
  loginWithEmail = (data: LoginRequest, params: RequestParams = {}) =>
    this.request<LoginWithEmailData, any>({
      path: `/v1/api/members/login`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 카카오 로그인을 진행한다.
   *
   * @tags 사용자 API
   * @name LoginWithKakao
   * @summary 카카오 로그인
   * @request POST:/v1/api/members/login/kakao
   * @secure
   * @response `200` `LoginWithKakaoData` OK
   */
  loginWithKakao = (data: OauthLoginRequest, params: RequestParams = {}) =>
    this.request<LoginWithKakaoData, any>({
      path: `/v1/api/members/login/kakao`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 자신의 배송지 목록을 조회합니다
   *
   * @tags 사용자 API
   * @name GetDeliveryAddresses
   * @summary 배송지 목록 조회
   * @request GET:/v1/api/members/delivery-addresses
   * @secure
   * @response `200` `GetDeliveryAddressesData` OK
   */
  getDeliveryAddresses = (params: RequestParams = {}) =>
    this.request<GetDeliveryAddressesData, any>({
      path: `/v1/api/members/delivery-addresses`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 배송지 정보를 추가합니다. (최대3개, 대표1개)
   *
   * @tags 사용자 API
   * @name AddDeliveryAddress
   * @summary 배송지 추가
   * @request POST:/v1/api/members/delivery-addresses
   * @secure
   * @response `200` `AddDeliveryAddressData` OK
   */
  addDeliveryAddress = (data: AddDeliveryAddressRequest, params: RequestParams = {}) =>
    this.request<AddDeliveryAddressData, any>({
      path: `/v1/api/members/delivery-addresses`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 배송지 정보를 전체 삭제합니다.
   *
   * @tags 사용자 API
   * @name DeleteDeliveryAddress
   * @summary 배송지 전체 삭제
   * @request DELETE:/v1/api/members/delivery-addresses
   * @secure
   * @response `200` `DeleteDeliveryAddressData` OK
   */
  deleteDeliveryAddress = (params: RequestParams = {}) =>
    this.request<DeleteDeliveryAddressData, any>({
      path: `/v1/api/members/delivery-addresses`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description 사용자가 채팅방을 나가면 채팅방 멤버에서 제거되고, 마지막 멤버가 나가면 채팅방 삭제
   *
   * @tags 채팅 API
   * @name LeaveChatRoom
   * @summary 채팅방 나가기
   * @request POST:/v1/api/chat/{chatRoomId}/leave
   * @secure
   * @response `200` `LeaveChatRoomData` OK
   */
  leaveChatRoom = (chatRoomId: number, params: RequestParams = {}) =>
    this.request<LeaveChatRoomData, any>({
      path: `/v1/api/chat/${chatRoomId}/leave`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description 1:1 채팅방을 생성합니다.
   *
   * @tags 채팅 API
   * @name CreateOneToOneChatRoom
   * @summary 1:1 채팅방 생성
   * @request POST:/v1/api/chat/one-to-one
   * @secure
   * @response `200` `CreateOneToOneChatRoomData` OK
   */
  createOneToOneChatRoom = (data: ChatRoomRequest, params: RequestParams = {}) =>
    this.request<CreateOneToOneChatRoomData, any>({
      path: `/v1/api/chat/one-to-one`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 1:10 그룹 채팅방을 생성합니다.
   *
   * @tags 채팅 API
   * @name CreateOneToManyChatRoom
   * @summary 1:10 그룹 채팅방 생성
   * @request POST:/v1/api/chat/one-to-many
   * @secure
   * @response `200` `CreateOneToManyChatRoomData` OK
   */
  createOneToManyChatRoom = (data: ChatRoomRequest, params: RequestParams = {}) =>
    this.request<CreateOneToManyChatRoomData, any>({
      path: `/v1/api/chat/one-to-many`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 판매자 또는 구매자가 상대방을 차단
   *
   * @tags chat-block-controller
   * @name BlockUser
   * @summary 사용자 차단
   * @request POST:/v1/api/chat/block
   * @secure
   * @response `200` `BlockUserData` OK
   */
  blockUser = (
    query: {
      /**
       * 차단한 사용자 ID
       * @format int64
       */
      chatBlockerId: number;
      /**
       * 차단당한 사용자 ID
       * @format int64
       */
      chatBlockedId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BlockUserData, any>({
      path: `/v1/api/chat/block`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 차단된 사용자를 차단 해제
   *
   * @tags chat-block-controller
   * @name UnblockUser
   * @summary 차단 해제
   * @request DELETE:/v1/api/chat/block
   * @secure
   * @response `200` `UnblockUserData` OK
   */
  unblockUser = (
    query: {
      /**
       * 차단 해제할 사용자 ID
       * @format int64
       */
      chatBlockerId: number;
      /**
       * 차단된 사용자 ID
       * @format int64
       */
      chatBlockedId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<UnblockUserData, any>({
      path: `/v1/api/chat/block`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 게시판 목록 조회를 위한 API입니다
   *
   * @tags 게시판 API
   * @name GetAllBoard
   * @summary 게시판 목록 조회
   * @request GET:/v1/api/boards
   * @secure
   * @response `200` `GetAllBoardData` OK
   */
  getAllBoard = (params: RequestParams = {}) =>
    this.request<GetAllBoardData, any>({
      path: `/v1/api/boards`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 게시판을 등록합니다.
   *
   * @tags 게시판 API
   * @name AddProduct1
   * @summary 게시판 등록
   * @request POST:/v1/api/boards
   * @secure
   * @response `200` `AddProduct1Data` OK
   */
  addProduct1 = (data: AddBoardRequest, params: RequestParams = {}) =>
    this.request<AddProduct1Data, any>({
      path: `/v1/api/boards`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 게시판 안 게시글 목록 조회를 위한 API입니다
   *
   * @tags 게시판 API
   * @name GetAllBoard1
   * @summary 게시판 상세 조회
   * @request GET:/v1/api/boards/{boardId}/messages
   * @secure
   * @response `200` `GetAllBoard1Data` OK
   */
  getAllBoard1 = (boardId: number, params: RequestParams = {}) =>
    this.request<GetAllBoard1Data, any>({
      path: `/v1/api/boards/${boardId}/messages`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 게시판에 게시글을 추가하기 위한 API입니다
   *
   * @tags 게시판 API
   * @name AddBoardMessage
   * @summary 게시글 추가
   * @request POST:/v1/api/boards/{boardId}/messages
   * @secure
   * @response `200` `AddBoardMessageData` OK
   */
  addBoardMessage = (boardId: number, data: AddBoardMessagePayload, params: RequestParams = {}) =>
    this.request<AddBoardMessageData, any>({
      path: `/v1/api/boards/${boardId}/messages`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description 입력한 휴대전화로 인증번호를 전송합니다
   *
   * @tags 휴대전화 인증 API
   * @name SendVerificationCode
   * @summary 판매자 인증 문자 전송
   * @request POST:/v1/api/auth/sms
   * @secure
   * @response `200` `SendVerificationCodeData` OK
   */
  sendVerificationCode = (
    query: {
      phoneNumber: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<SendVerificationCodeData, any>({
      path: `/v1/api/auth/sms`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 휴대전화로 온 인증코드를 통해 인증합니다
   *
   * @tags 휴대전화 인증 API
   * @name VerifySmsCode
   * @summary 판매자 인증 코드 인증
   * @request POST:/v1/api/auth/sms/verify
   * @secure
   * @response `200` `VerifySmsCodeData` OK
   */
  verifySmsCode = (
    query: {
      phoneNumber: string;
      verificationCode: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<VerifySmsCodeData, any>({
      path: `/v1/api/auth/sms/verify`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 입력한 이메일로 인증번호를 전송합니다
   *
   * @tags 이메일 인증 API
   * @name SendVerificationCode1
   * @summary 이메일 인증 전송
   * @request POST:/v1/api/auth/email
   * @secure
   * @response `200` `SendVerificationCode1Data` OK
   */
  sendVerificationCode1 = (
    query: {
      email: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<SendVerificationCode1Data, any>({
      path: `/v1/api/auth/email`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 이메일로 인증코드를 통해 인증합니다
   *
   * @tags 이메일 인증 API
   * @name VerifyEmailCode
   * @summary 인증 코드 인증
   * @request POST:/v1/api/auth/email/verify
   * @secure
   * @response `200` `VerifyEmailCodeData` OK
   */
  verifyEmailCode = (
    query: {
      email: string;
      verificationCode: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<VerifyEmailCodeData, any>({
      path: `/v1/api/auth/email/verify`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 상품 ID를 통해 상품을 상세 조회합니다.
   *
   * @tags 상품 API
   * @name GetProduct
   * @summary 상품 상세 조회
   * @request GET:/v1/api/products/{productId}
   * @secure
   * @response `200` `GetProductData` OK
   */
  getProduct = (productId: number, params: RequestParams = {}) =>
    this.request<GetProductData, any>({
      path: `/v1/api/products/${productId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 상품 수정을 위한 API입니다.
   *
   * @tags 상품 API
   * @name UpdateProduct
   * @summary 상품 수정
   * @request PATCH:/v1/api/products/{productId}
   * @secure
   * @response `200` `UpdateProductData` OK
   */
  updateProduct = (productId: number, data: UpdateProductPayload, params: RequestParams = {}) =>
    this.request<UpdateProductData, any>({
      path: `/v1/api/products/${productId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description 회원 정보를 조회합니다.(로그인 정보)
   *
   * @tags 사용자 API
   * @name LoadProfile
   * @summary 회원 정보 조회
   * @request GET:/v1/api/members/profile
   * @secure
   * @response `200` `LoadProfileData` OK
   */
  loadProfile = (params: RequestParams = {}) =>
    this.request<LoadProfileData, any>({
      path: `/v1/api/members/profile`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 회원의 이미지 또는 닉네임을 변경한다.
   *
   * @tags 사용자 API
   * @name UpdateProfile
   * @summary 프로필 변경
   * @request PATCH:/v1/api/members/profile
   * @secure
   * @response `200` `UpdateProfileData` OK
   */
  updateProfile = (data: UpdateProfilePayload, params: RequestParams = {}) =>
    this.request<UpdateProfileData, any>({
      path: `/v1/api/members/profile`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description 배송지 정보를 삭제합니다.
   *
   * @tags 사용자 API
   * @name DeleteDeliveryAddress1
   * @summary 배송지 삭제
   * @request DELETE:/v1/api/members/delivery-addresses/{deliveryAddressId}
   * @secure
   * @response `200` `DeleteDeliveryAddress1Data` OK
   */
  deleteDeliveryAddress1 = (deliveryAddressId: number, params: RequestParams = {}) =>
    this.request<DeleteDeliveryAddress1Data, any>({
      path: `/v1/api/members/delivery-addresses/${deliveryAddressId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description 배송지 정보를 수정합니다.
   *
   * @tags 사용자 API
   * @name ModifyDeliveryAddress
   * @summary 배송지 수정
   * @request PATCH:/v1/api/members/delivery-addresses/{deliveryAddressId}
   * @secure
   * @response `200` `ModifyDeliveryAddressData` OK
   */
  modifyDeliveryAddress = (deliveryAddressId: number, data: ModifyDeliveryAddressRequest, params: RequestParams = {}) =>
    this.request<ModifyDeliveryAddressData, any>({
      path: `/v1/api/members/delivery-addresses/${deliveryAddressId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 게시판 삭제를 위한 API입니다
   *
   * @tags 게시판 API
   * @name DeleteBoard
   * @summary 게시판 삭제
   * @request DELETE:/v1/api/boards/{boardId}
   * @secure
   * @response `200` `DeleteBoardData` OK
   */
  deleteBoard = (boardId: number, params: RequestParams = {}) =>
    this.request<DeleteBoardData, any>({
      path: `/v1/api/boards/${boardId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description 게시판 수정을 위한 API입니다.
   *
   * @tags 게시판 API
   * @name UpdateBoard
   * @summary 게시판 수정
   * @request PATCH:/v1/api/boards/{boardId}
   * @secure
   * @response `200` `UpdateBoardData` OK
   */
  updateBoard = (boardId: number, data: UpdateBoardRequest, params: RequestParams = {}) =>
    this.request<UpdateBoardData, any>({
      path: `/v1/api/boards/${boardId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 서비스 이용에 필요한 약관 목록을 조회합니다
   *
   * @tags 약관 API
   * @name GetAllTerms
   * @summary 약관 목록 조회
   * @request GET:/v1/api/terms
   * @secure
   * @response `200` `GetAllTermsData` OK
   */
  getAllTerms = (params: RequestParams = {}) =>
    this.request<GetAllTermsData, any>({
      path: `/v1/api/terms`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 약관의 Id를 이용해 약관을 상세 조회합니다
   *
   * @tags 약관 API
   * @name GetTermsById
   * @summary 약관 상세 조회
   * @request GET:/v1/api/terms/{termsId}
   * @secure
   * @response `200` `GetTermsByIdData` OK
   */
  getTermsById = (termsId: number, params: RequestParams = {}) =>
    this.request<GetTermsByIdData, any>({
      path: `/v1/api/terms/${termsId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 랜덤으로 상품을 조회합니다.
   *
   * @tags 사용자 API
   * @name LoadRandomProductRecommendList
   * @summary 랜덤 상품 추천
   * @request GET:/v1/api/recommendations/random
   * @secure
   * @response `200` `LoadRandomProductRecommendListData` OK
   */
  loadRandomProductRecommendList = (
    query: {
      /** 상품 추천 서비스 요청 */
      request: LoadProductRecommendListRequest;
    },
    params: RequestParams = {},
  ) =>
    this.request<LoadRandomProductRecommendListData, any>({
      path: `/v1/api/recommendations/random`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 사용자의 주문 내역을 기반으로 상품을 추천합니다.
   *
   * @tags 사용자 API
   * @name LoadProductRecommendList
   * @summary 사용자 기반 추천 서비스
   * @request GET:/v1/api/recommendations/order-history
   * @secure
   * @response `200` `LoadProductRecommendListData` OK
   */
  loadProductRecommendList = (
    query: {
      /** 상품 추천 서비스 요청 */
      request: LoadProductRecommendListRequest;
    },
    params: RequestParams = {},
  ) =>
    this.request<LoadProductRecommendListData, any>({
      path: `/v1/api/recommendations/order-history`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 판매자가 등록한 상품 목록을 조회합니다.
   *
   * @tags 상품 API
   * @name GetSellerProducts
   * @summary 판매자 상품 목록 조회
   * @request GET:/v1/api/products/seller
   * @secure
   * @response `200` `GetSellerProductsData` OK
   */
  getSellerProducts = (
    query: {
      /** 상품 목록 조회 시 사용하는 요청 */
      request: GetSellerProducts;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetSellerProductsData, any>({
      path: `/v1/api/products/seller`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 키워드 또는 카테고리 타입 등을 통해 상품을 상세 조회합니다.
   *
   * @tags 상품 API
   * @name GetAllProductByLike
   * @summary 좋아요 상품 목록 조회
   * @request GET:/v1/api/products/like
   * @secure
   * @response `200` `GetAllProductByLikeData` OK
   */
  getAllProductByLike = (params: RequestParams = {}) =>
    this.request<GetAllProductByLikeData, any>({
      path: `/v1/api/products/like`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 중복된 닉네임이 있는지 검사합니다
   *
   * @tags 사용자 API
   * @name CheckNicknameAvailability
   * @summary 닉네임 중복 검사
   * @request GET:/v1/api/members/check-nickname
   * @secure
   * @response `200` `CheckNicknameAvailabilityData` OK
   */
  checkNicknameAvailability = (
    query: {
      nickname: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CheckNicknameAvailabilityData, any>({
      path: `/v1/api/members/check-nickname`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 회원의 정보(마이페이지 정보)를 조회한다.
   *
   * @tags 사용자 API
   * @name CheckEmailAvailability
   * @summary 회원 정보 조회
   * @request GET:/v1/api/members/check-email
   * @secure
   * @response `200` `CheckEmailAvailabilityData` OK
   */
  checkEmailAvailability = (
    query: {
      email: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CheckEmailAvailabilityData, any>({
      path: `/v1/api/members/check-email`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 지정된 채팅방 ID에 따른 메시지 리스트를 반환
   *
   * @tags 채팅 API
   * @name GetChatMessages
   * @summary 채팅 메시지 리스트 반환
   * @request GET:/v1/api/chat/{id}
   * @secure
   * @response `200` `GetChatMessagesData` OK
   */
  getChatMessages = (id: number, params: RequestParams = {}) =>
    this.request<GetChatMessagesData, any>({
      path: `/v1/api/chat/${id}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 카테고리 선택 시 사용할 API 입니다
   *
   * @tags 카테고리 API
   * @name GetAllCategories
   * @request GET:/v1/api/categories
   * @secure
   * @response `200` `GetAllCategoriesData` OK
   */
  getAllCategories = (params: RequestParams = {}) =>
    this.request<GetAllCategoriesData, any>({
      path: `/v1/api/categories`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 회원 삭제를 위한 API입니다
   *
   * @tags 사용자 API
   * @name WithdrawMember
   * @summary 회원 삭제
   * @request DELETE:/v1/api/members/withdraw
   * @secure
   * @response `200` `WithdrawMemberData` OK
   */
  withdrawMember = (params: RequestParams = {}) =>
    this.request<WithdrawMemberData, any>({
      path: `/v1/api/members/withdraw`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description 게시판의 게시글을 삭제하기 위한 API입니다
   *
   * @tags 게시판 API
   * @name DeleteBoardMessage
   * @summary 게시글 삭제
   * @request DELETE:/v1/api/boards/{boardId}/messages/{messageId}
   * @secure
   * @response `200` `DeleteBoardMessageData` OK
   */
  deleteBoardMessage = (boardId: number, messageId: number, params: RequestParams = {}) =>
    this.request<DeleteBoardMessageData, any>({
      path: `/v1/api/boards/${boardId}/messages/${messageId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
