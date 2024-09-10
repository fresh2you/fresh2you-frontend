export const CloseBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute -top-2 -right-2 text-2xl"
      style={{
        color: 'white',
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
      }}
    >
      &times;
    </button>
  );
};
