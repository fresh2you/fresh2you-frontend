/* 모든 약관 목록 조회 */
declare interface IGetAllTermsResponse extends defaultApiResponse {
  data: {
    termsList: {
      termsId: number;
      title: string;
      isRequired: boolean;
      content: string;
    }[];
  };
}

/* 특정 약관 상세 조회 */
declare interface IGetTermDetailsResponse extends defaultApiResponse {
  data: {
    title: string;
    content: string;
    isRequired: boolean;
  };
}
