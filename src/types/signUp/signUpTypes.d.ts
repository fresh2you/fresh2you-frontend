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

declare interface FunnelHistory<TContextMap, TCurrentStep extends keyof TContextMap> {
  push: <TTargetStep extends keyof TContextMap>(
    step: TTargetStep,
    context: TContextMap[TTargetStep] | ((prev: TContextMap<TCurrentStep>) => T[TTargetStep]),
  ) => Promise<void>;
  replace: <TTargetStep extends keyof TContextMap>(
    step: TTargetStep,
    context: TContextMap[TTargetStep] | ((prev: TContextMap<TCurrentStep>) => T[TTargetStep]),
  ) => Promise<void> | void;
  go: (index: number) => void | Promise<void>;
  back: () => void | Promise<void>;
}

declare interface FunnelRenderComponent<T> extends React.ComponentType<FunnelRenderProps<T>> {
  with: FunnelRenderWithEvent<T>;
  overlay: FunnelRenderOverlay<T>;
}

declare type UseFunnelResults<T> = {
  [key in keyof T]: {
    step: key;
    context: T[key];
    history: FunnelHistory<T, T[key]>;
  };
}[keyof T] & {
  index: number;
  historySteps: { step: keyof T; context: T[keyof T] }[];
  Render: FunnelRenderComponent<T>;
};

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
