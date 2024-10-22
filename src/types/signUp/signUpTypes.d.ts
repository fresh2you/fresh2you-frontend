declare type ValidityType = {
  isEmailValid: boolean;
  isConfirmPasswordValid: boolean;
  isNicknameValid: boolean;
};

declare type FormDataType = {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
};

declare type StatusType = {
  emailStatus: string;
  passwordStatus: string;
  nicknameStatus: string;
};

declare interface TermAgreement {
  termsId: number;
  isAgreed: boolean;
}

declare interface UseSignUpFormProps {
  funnelId: string;
  isAgreedToTerms: TermAgreement[];
}

declare interface Field {
  label: string;
  type: "text" | "password" | "email" | "number";
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  autoComplete?: string;
  button?: React.ReactNode;
}

declare type SignUpStepContext = {
  이메일입력: { email: string };
  비밀번호입력: { email: string; password: string };
  비밀번호확인: { email: string; password: string; confirmPassword: string };
  닉네임입력: { email: string; password: string; confirmPassword: string; nickname: string };
};

declare interface SignUpSteps {
  이메일입력: Field[];
  비밀번호입력: Field[];
  비밀번호확인: Field[];
  닉네임입력: Field[];
}
declare interface RouteOption {
  preventScrollReset?: boolean;
  unstable_flushSync?: boolean;
  unstable_viewTransition?: boolean;
}
