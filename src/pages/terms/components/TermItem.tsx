interface Term {
  termsId: string;
  title: string;
  content: string;
  isRequired: boolean;
}

interface TermItemProps {
  term: Term;
  isChecked: boolean;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openModal: (content: string) => void;
}

const TermItem: React.FC<TermItemProps> = ({ term, isChecked, handleCheck, openModal }) => {
  return (
    <li key={term.termsId} className="mb-3">
      <div className="flex items-center justify-between cursor-pointer">
        <div>
          <input
            type="checkbox"
            id={term.termsId}
            name={term.termsId}
            checked={isChecked}
            onChange={handleCheck}
            className="custom-focus-light"
          />
          <label htmlFor={term.termsId} className="ml-1 text-custom-sm-p">
            {term.isRequired ? "(필수) " : "(선택) "} {term.title}
          </label>
        </div>
        <button
          className="ml-2 whitespace-nowrap px-2 rounded-md py-1.5
          text-custom-sm-p custom-focus-light"
          onClick={() => openModal(term.content)}
        >
          보기
        </button>
      </div>
    </li>
  );
};

export default TermItem;
