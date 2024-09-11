import '../../../../styles/styles.css';
export const ResendBtn = ({ isResendEnabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={!isResendEnabled}
      className={
        'resend-button text-custom-green flex p-0 w-16 whitespace-nowrap items-center justify-center h-10 hover:border-transparent'
      }
      style={{
        outline: 'none',
        cursor: !isResendEnabled ? `not-allowed` : 'pointer',
      }}
    >
      재전송
    </button>
  );
};
