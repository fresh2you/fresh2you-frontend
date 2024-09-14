import { isFormValid } from '../../utils/validationUtils';

const SubmitBtn = ({ validity }) => {
  const formIsValid = isFormValid(validity);

  return (
    <button
      type="submit"
      className={`px-4 py-2 rounded bg-custom-green mt-4 w-full text-white hover:border-transparent focus:outline-none ${
        formIsValid ? 'cursor-pointer' : 'cursor-not-allowed'
      }`}
      disabled={!formIsValid}
    >
      제출
    </button>
  );
};

export default SubmitBtn;
