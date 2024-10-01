declare interface ISignUpRequest {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  termsAgreements: {
    termsId: number;
    isAgreed: boolean;
  }[];
  provider: "EMAIL" | "KAKAO" | "NAVER";
  providerId: `${number}` | null;
}
