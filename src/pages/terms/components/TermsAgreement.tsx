import { useState } from "react";
import "../../../styles/styles.css";
import TermModal from "./TermModal";
import TermItem from "./TermItem";
import { handleIndividualCheck, handleAllCheck } from "../utils/termsHelper";
import useTerms from "../hook/useTerms";
import { overlay } from "overlay-kit";

interface Term {
  termsId: string;
  title: string;
  content: string;
  isRequired: boolean;
}

interface TermsAgreementProps {
  onAgree: () => void;
  termsChecked: Record<string, boolean>;
  setTermsChecked: (termsChecked: Record<string, boolean>) => void;
}

const TermsAgreement: React.FC<TermsAgreementProps> = ({ onAgree, termsChecked, setTermsChecked }) => {
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const termsList: Term[] = useTerms(setTermsChecked);

  const openModal = (content: string) => {
    const unescapedData = JSON.parse(`"${content}"`);
    overlay.open(({ isOpen, close }) => {
      return <TermModal isOpen={isOpen} onClose={close} content={unescapedData} />;
    });
  };

  return (
    <section
      className="p-3 bg-custom-green-200 rounded-md mb-5 text-custom-black 
    flex flex-col mobile:w-11/12 min-h-[201px]"
    >
      <div className="mb-1">
        <input
          type="checkbox"
          id="all"
          checked={allChecked}
          onChange={(e) => handleAllCheck(e, termsList, setAllChecked, setTermsChecked, onAgree)}
          className="custom-focus"
          aria-label="전체 약관에 동의"
        />
        <label htmlFor="all" className="ml-2 text-custom-span font-semibold">
          전체 약관에 동의합니다
        </label>
      </div>
      <ul className="ml-1.5">
        {termsList.map((term) => (
          <TermItem
            key={term.termsId}
            term={term}
            isChecked={termsChecked[term.termsId]}
            handleCheck={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleIndividualCheck(e, termsChecked, setTermsChecked, setAllChecked, onAgree, termsList)
            }
            openModal={() => openModal(term.content)}
          />
        ))}
      </ul>
    </section>
  );
};

export default TermsAgreement;
