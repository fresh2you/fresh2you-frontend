import '../../../../styles/styles.css';
export const ConfirmBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="button-custom text-custom-black px-4 w-16 py-1 h-10"
      style={{
        outline: 'none',
        borderColor: 'transparent',
      }}
    >
      확인
    </button>
  );
};
