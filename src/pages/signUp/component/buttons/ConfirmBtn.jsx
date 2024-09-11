import '../../../../styles/styles.css';
export const ConfirmBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="button-custom text-custom-black px-4 w-16 py-1 h-10 hover:border-transparent"
      style={{
        outline: 'none',
      }}
    >
      확인
    </button>
  );
};
