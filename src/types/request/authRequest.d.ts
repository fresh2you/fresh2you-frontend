interface BasicSignUpRequest {
  email: string;
  nickname: string;
  termsAgreements: {
    termsId: number;
    isAgreed: boolean;
  }[];
}

interface EmailSignUpRequest extends BasicSignUpRequest {
  password: string;
  confirmPassword: string;
  provider: "EMAIL";
  providerId: null;
}

interface SocialSignUpRequest extends BasicSignUpRequest {
  password: null;
  confirmPassword: null;
  provider: "KAKAO" | "NAVER";
  providerId: `${number}`;
}

declare type ISignUpRequest = EmailSignUpRequest | SocialSignUpRequest;
