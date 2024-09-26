const TermItem = ({ term, isChecked, handleCheck, openModal }) => {
  return (
    <div key={term.termsId} className="mb-3">
      <div className="flex items-center cursor-pointer justify-between">
        <div>
          <input
            type="checkbox"
            id={term.termsId}
            name={term.termsId}
            checked={isChecked}
            onChange={handleCheck}
            className="custom-focus"
          />
          <label htmlFor={term.termsId} className="ml-1 text-sm">
            {term.isRequired ? "(필수) " : "(선택) "} {term.title}
          </label>
        </div>
        <button
          className="ml-2 text-sm whitespace-nowrap px-2 rounded-md py-1.5"
          onClick={() => openModal(term.content)}
        >
          보기
        </button>
      </div>
    </div>
  );
};

export default TermItem;
