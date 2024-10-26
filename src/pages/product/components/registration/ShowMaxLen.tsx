const ShowMaxLen: React.FC<{ value: string; maxLength: number | undefined }> = ({ value, maxLength }) => {
  return (
    <span className="text-custom-btn-text text-gray-500 mt-0.5" aria-live="polite">
      {value.length}/{maxLength}
    </span>
  );
};
export default ShowMaxLen;
