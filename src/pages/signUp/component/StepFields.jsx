import InputField from './InputField';
import NextButton from './NextButton';
const StepFields = ({ steps, currentStep, validity, funnel, formData }) => (
  <>
    {steps[currentStep].map((field, index) => (
      <div key={index} className={`flex flex-col ${'닉네임입력' === currentStep ? 'mb-4' : 'mb-11'} relative`}>
        <div className="flex items-end mb-2">
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
        <div
          className="absolute -bottom-11"
          style={{ right: currentStep === '비밀번호확인' || currentStep === '비밀번호입력' ? '85px' : '0' }}
        >
          {currentStep !== '닉네임입력' && 0 === index && (
            <NextButton currentStep={currentStep} validity={validity} funnel={funnel} formData={formData} />
          )}
        </div>
      </div>
    ))}
  </>
);

export default StepFields;
