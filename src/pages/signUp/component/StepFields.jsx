import InputField from "./InputField";
import { NextButton } from "./buttons/NextBtn";
const StepFields = ({ steps, currentStep, validity, funnel, formData }) => (
  <>
    {steps[currentStep].map((field, index) => (
      <div key={index} className="flex items-center">
        <div className="flex items-end mb-3 gap-2">
          <InputField
            label={field.label}
            type={field.type}
            value={field.value}
            setValue={field.setValue}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            onchange={field.onChange}
          />
          {field.button}
          {currentStep !== "닉네임입력" && 0 === index && (
            <NextButton currentStep={currentStep} validity={validity} funnel={funnel} formData={formData} />
          )}
        </div>
      </div>
    ))}
  </>
);

export default StepFields;
