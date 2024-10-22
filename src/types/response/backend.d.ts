/* TODO: 추후 API 명세서 참고하여 수정 */
declare interface defaultApiResponse {
  success: boolean;
  code: `${number}`;
  message: string;
  data: null;
}
declare interface ApiError {
  code: string;
  message: string;
  response: {
    data: {
      code: string;
      message: string;
    };
  };
}
