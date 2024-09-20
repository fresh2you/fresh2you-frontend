import { useState, useEffect } from "react";
import { fetchTerms } from "../api/terms";
import data from "../../../mockdata/db.json";
import "../../../styles/styles.css";
import { CloseBtn } from "@/pages/signUp/component/buttons/CloseBtn";
import TermItemSkeleton from "./TermItemSkeleton";
const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white rounded-lg py-4 px-4 h-3/5 overflow-auto mobile:w-11/12 mobile:max-w-[394px]
      tablet-sm:w-4/5  tablet-sm:max-w-[500px] tablet:w-3/5 tablet:max-w-[700px]"
      >
        <CloseBtn onClick={onClose} />
        <div dangerouslySetInnerHTML={{ __html: content }} className="modal-content"></div>
      </div>
    </div>
  );
};

const TermsAgreement = ({ onAgree }) => {
  const [termsList, setTermsList] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [currentTermContent, setCurrentTermContent] = useState("");

  useEffect(() => {
    const getTerms = async () => {
      try {
        // const data = await fetchTerms();
        setTermsList(data.termsList);

        const initialTermsChecked = {};
        data.termsList.forEach((term) => {
          initialTermsChecked[term.termsId] = false;
        });
        setTermsChecked(initialTermsChecked);
      } catch (error) {
        console.error("약관 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    getTerms();
  }, []);

  const handleIndividualCheck = (e) => {
    const { name, checked } = e.target;
    const updatedTerms = { ...termsChecked, [name]: checked };

    setTermsChecked(updatedTerms);
    setAllChecked(Object.values(updatedTerms).every(Boolean));
    onAgree(Object.values(updatedTerms).every(Boolean));
  };

  const handleAllCheck = (e) => {
    const { checked } = e.target;
    setAllChecked(checked);
    const updatedTerms = {};
    termsList.forEach((term) => {
      updatedTerms[term.termsId] = checked;
    });
    setTermsChecked(updatedTerms);
    onAgree(checked);
  };

  const openModal = (content) => {
    setCurrentTermContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentTermContent("");
  };

  const renderTerm = (term) => (
    <div key={term.termsId} className="mb-3">
      <div className="flex items-center cursor-pointer justify-between">
        <div>
          <input
            type="checkbox"
            id={term.termsId}
            name={term.termsId}
            checked={termsChecked[term.termsId]}
            onChange={handleIndividualCheck}
            className="custom-focus"
          />
          <label htmlFor={term.termsId} className="ml-1 text-sm">
            {term.isRequired ? "(필수) " : "(선택) "} {term.title}
          </label>
        </div>
        <button className="ml-2 text-sm whitespace-nowrap px-3 rounded-md" onClick={() => openModal(term.content)}>
          보기
        </button>
      </div>
    </div>
  );

  return (
    <div
      className="py-3 pb-1 mobile:px-1.5 tablet-sm:px-2
     bg-custom-green-200 rounded-md mb-4 text-custom-black flex flex-col"
    >
      <div className="mb-1">
        <input type="checkbox" id="all" checked={allChecked} onChange={handleAllCheck} className="custom-focus" />
        <label htmlFor="all" className="ml-2 text-base font-semibold">
          전체 약관에 동의합니다
        </label>
      </div>

      <div className="ml-1.5 mobile:w-[260px] tablet-sm:w-[280px]">
        {termsList.length > 0 ? (
          termsList.map((term) => renderTerm(term))
        ) : (
          <TermItemSkeleton count={termsList.length} />
        )}
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} content={currentTermContent} />
    </div>
  );
};

export default TermsAgreement;
