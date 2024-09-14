export const DuplicateCheckButton = ({ isValid, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center min-w-20 h-10 ml-2 rounded-md px-2 whitespace-nowrap text-white focus:outline-none hover:border-transparent ${
        isValid ? 'bg-custom-gray-dark' : 'bg-custom-green'
      }`}
    >
      {isValid ? '완료' : '중복 확인'}
    </button>
  );
};
