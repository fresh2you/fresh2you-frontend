import blockIcon from '../../../../assets/icons/block.svg';
import { isNextButtonDisabled } from '../../utils/validationUtils';

export const NextButton = ({ currentStep, validity, funnel, formData }) => {
  return (
    <button
      type="button"
      onClick={() =>
        funnel.history.push(
          currentStep === '이메일입력'
            ? '비밀번호입력'
            : currentStep === '비밀번호입력'
            ? '비밀번호확인'
            : currentStep === '비밀번호확인'
            ? '전화번호입력'
            : '닉네임입력',
        )
      }
      disabled={isNextButtonDisabled(currentStep, validity)}
      className="button-custom text-custom-black w-16 whitespace-nowrap px-2 self-end"
      style={{
        outline: 'none',
        borderColor: 'transparent',
        cursor: isNextButtonDisabled(currentStep, validity) ? `url(${blockIcon}), auto` : 'pointer',
      }}
    >
      다음
    </button>
  );
};
