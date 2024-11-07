import ErrorMessages from "./component/errorMsg/ErrorMessages";
import StepFields from "./component/StepFields";
import SubmitBtn from "./component/buttons/SubmitBtn";
import Loading from "../redirection/component/Loading";
import useRedirectIfNotAgreed from "./hooks/useRedirectIfNotAgreed";
import { useSignUpForm } from "./hooks/useSignUpForm";

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
        <Loading />
      ) : (
        <div className="mx-auto px-4 mobile:w-11/12 max-w-[360px]">
          <form onSubmit={onSubmit} className="relative flex flex-col items-start justify-center min-h-screen">
            <ErrorMessages status={status} />
            <StepFields
              steps={steps}
              currentStep={currentStep}
              formData={formData}
              funnel={funnel}
              isEmailValid={validity.isEmailValid}
            />
            {currentStep === "닉네임입력" && <SubmitBtn validity={validity} />}
          </form>
        </div>
      )}
    </>
  );
}
