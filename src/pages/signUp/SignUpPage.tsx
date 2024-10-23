import ErrorMessages from "./component/errorMsg/ErrorMessages";
import StepFields from "./component/StepFields";
import SubmitBtn from "./component/buttons/SubmitBtn";
import { Loading } from "../redirection/component/Loading";
import useRedirectIfNotAgreed from "./hooks/useRedirectIfNotAgreed";
import { useSignUpForm } from "./hooks/useSignUpForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpPage() {
  const termsAgreementsString = sessionStorage.getItem("termsAgreements");
  const isAgreedToTerms: TermAgreement[] = termsAgreementsString ? JSON.parse(termsAgreementsString) : [];
  useRedirectIfNotAgreed(isAgreedToTerms);
  const { formData, status, validity, isLoading, steps, currentStep, onSubmit, funnel } = useSignUpForm({
    funnelId: "user-signup",
    isAgreedToTerms,
  });

  return (
    <>
      {isLoading ? (
        <Loading isLayoutApplied={false} />
      ) : (
        <div className="mx-auto px-4 mobile:w-11/12 max-w-[360px]">
          <form onSubmit={onSubmit} className="flex flex-col justify-center min-h-screen items-start relative">
            <ErrorMessages status={status} />
            <StepFields
              steps={steps}
              currentStep={currentStep}
              formData={formData}
              funnel={funnel}
              isEmailValid={validity.isEmailValid}
            />
            {currentStep === "닉네임입력" && <SubmitBtn validity={validity} />}
            <ToastContainer />
          </form>
        </div>
      )}
    </>
  );
}
