import InputWithLabel from "@/components/InputWithLabel";
import { NextButton } from "./buttons/NextBtn";

interface StepFieldsProps {
  steps: SignUpSteps;
  currentStep: keyof SignUpSteps;
  funnel: UseFunnelResults<SignUpStepContext>;
  formData: FormDataType;
}
const StepFields: React.FC<StepFieldsProps> = ({ steps, currentStep, funnel, formData }) => (
  <>
    {steps[currentStep].map((field: Field, index: number) => (
      <div key={index} className={`flex items-center mb-1.5 w-full`}>
        <InputWithLabel
          id={field.label}
          label={field.label}
          type={field.type}
          value={field.value}
          onChange={(event) => field.setValue(event.target.value)}
          placeholder={field.placeholder}
          autoComplete="on"
          onButtonClick={field.button ? (field.button as React.ReactElement).props.onClick : null}
          noIcon={true}
          withBtn={field.button}
        />
        {currentStep !== "닉네임입력" && index === 0 && (
          <NextButton currentStep={currentStep} funnel={funnel} formData={formData} />
        )}
      </div>
    ))}
  </>
);

export default StepFields;
