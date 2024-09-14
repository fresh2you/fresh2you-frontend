import '../../../../styles/styles.css';

export const ResendBtn = ({ isResendEnabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={!isResendEnabled}
      className={`resend-button text-custom-green flex p-0 w-16 whitespace-nowrap items-center justify-center h-10 hover:border-transparent focus:outline-none ${
        isResendEnabled ? 'cursor-pointer' : 'cursor-not-allowed'
      }`}
    >
      재전송
    </button>
  );
};
