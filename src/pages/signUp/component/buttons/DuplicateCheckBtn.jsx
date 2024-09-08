export const DuplicateCheckButton = ({ isValid, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center min-w-20 h-10 ml-2 rounded-md px-2 whitespace-nowrap"
      style={{
        backgroundColor: isValid ? '#7D7D7D' : '#40A578',
        color: 'white',
        borderColor: 'transparent',
        outline: 'none',
      }}
    >
      {isValid ? '완료' : '중복 확인'}
    </button>
  );
};
