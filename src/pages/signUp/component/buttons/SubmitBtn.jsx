import { isFormValid } from '../../utils/validationUtils';
import { handleSubmit } from '../../utils/handlers/handleSubmit';
const SubmitBtn = ({ validity }) => {
  const formIsValid = isFormValid(validity);
  return (
    <button
      type="submit"
      className="px-4 py-2 rounded submit-button bg-custom-green mt-4 w-full hover:border-transparent"
      disabled={!formIsValid}
      style={{
        color: 'white',
        outline: 'none',
        cursor: formIsValid ? `pointer` : `not-allowed`,
      }}
    >
      제출
    </button>
  );
};
export default SubmitBtn;
