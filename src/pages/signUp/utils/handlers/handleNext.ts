import { UseFunnelResults } from "@use-funnel/react-router-dom";

export const handleNext = (
  funnel: UseFunnelResults<SignUpStepContext, never>,
  formData: FormDataType,
  currentStep: string,
) => {
  switch (currentStep) {
    case "이메일입력":
      funnel.history.push("비밀번호입력", {
        email: formData.email,
        password: formData.password,
      });
      break;
    case "비밀번호입력":
      funnel.history.push("비밀번호확인", {
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      break;
    case "비밀번호확인":
      funnel.history.push("닉네임입력", {
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        nickname: formData.nickname,
      });
      break;
    default:
      break;
  }
};
