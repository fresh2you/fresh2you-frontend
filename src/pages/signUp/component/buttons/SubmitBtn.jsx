import { isFormValid } from '../../utils/validationUtils';
import blockIcon from '../../../../assets/icons/block.svg';
const SubmitBtn = (validity) => {
  return (
    <button
      type="submit"
      className="px-4 py-2 rounded submit-button bg-custom-green mt-4 w-full"
      disabled={!isFormValid(validity)}
      style={{
        color: 'white',
        outline: 'none',
        borderColor: 'transparent',
        cursor: !isFormValid(validity) ? `url(${blockIcon}), auto` : 'pointer',
      }}
    >
      제출
    </button>
  );
};
export default SubmitBtn;
