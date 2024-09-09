import InputField from './InputField';
import { NextButton } from './buttons/NextBtn';
const StepFields = ({ steps, currentStep, validity, funnel, formData }) => (
  <>
    {steps[currentStep].map((field, index) => (
      <div key={index} className={`flex flex-col relative`}>
        <div className="flex items-end mb-4">
          <InputField
            label={field.label}
            type={field.type}
            value={field.value}
            setValue={field.setValue}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
          />
          {field.button}
        </div>
        {currentStep !== '닉네임입력' && 0 === index && (
          <NextButton currentStep={currentStep} validity={validity} funnel={funnel} formData={formData} />
        )}
      </div>
    ))}
  </>
);

export default StepFields;
