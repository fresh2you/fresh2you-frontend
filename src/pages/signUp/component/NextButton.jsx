import blockIcon from '../../../assets/icons/block.svg';
import { isNextButtonDisabled } from '../utils/validationUtils';

const NextButton = ({ currentStep, validity, funnel, formData }) => {
  return (
    <button
      type="button"
      onClick={() =>
        funnel.history.push(
          currentStep === '이메일입력'
            ? '비밀번호입력'
            : currentStep === '비밀번호입력'
            ? '비밀번호확인'
            : '닉네임입력',
          formData.email,
          formData.password,
        )
      }
      disabled={isNextButtonDisabled(currentStep, validity)}
      className="button-custom text-custom-black hover:outline-none"
      style={{
        borderColor: 'transparent',
        cursor: isNextButtonDisabled(currentStep, validity) ? `url(${blockIcon}), auto` : 'pointer',
      }}
    >
      다음
    </button>
  );
};

export default NextButton;
