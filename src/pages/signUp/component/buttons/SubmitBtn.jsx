import { isFormValid } from '../../utils/validationUtils';
import blockIcon from '../../../../assets/icons/block.svg';
import { handleSubmit } from '../../utils/handlers/handleSubmit';
const SubmitBtn = ({ validity }) => {
  const formIsValid = isFormValid(validity);
  return (
    <button
      type="submit"
      className="px-4 py-2 rounded submit-button bg-custom-green mt-4 w-full"
      disabled={!formIsValid}
      style={{
        color: 'white',
        outline: 'none',
        borderColor: 'transparent',
        cursor: formIsValid ? `pointer` : `url(${blockIcon}), auto`,
      }}
    >
      제출
    </button>
  );
};
export default SubmitBtn;
