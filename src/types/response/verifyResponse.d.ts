/* 이메일 인증 전송 */
declare interface ISendEmailResponse extends defaultApiResponse {
  data: object;
}

/* 이메일 인증 코드 제출 */
declare interface IResponse extends defaultApiResponse {
  data: object;
}

/* 판매자 인증 문자 전송 */
declare interface IResponse extends defaultApiResponse {
  data: object;
}

/* 판매자 인증 문자 코드 제출 */
declare interface IResponse extends defaultApiResponse {
  data: object;
}
