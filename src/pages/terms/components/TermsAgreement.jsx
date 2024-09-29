import { useState, useRef } from "react";
import "../../../styles/styles.css";
import TermItemSkeleton from "./TermItemSkeleton";
import TermModal from "./TermModal";
import TermItem from "./TermItem";
import { handleIndividualCheck, handleAllCheck } from "../utils/termsHelper";
import useTerms from "../hook/useTerms";
import { CSSTransition } from "react-transition-group";

const TermsAgreement = ({ onAgree, termsChecked, setTermsChecked }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTermContent, setCurrentTermContent] = useState("");
  const termsList = useTerms(setTermsChecked, setIsLoading);
  const skeletonRef = useRef(null);
  const termListRef = useRef(null);

  const openModal = (content) => {
    setCurrentTermContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentTermContent("");
  };

  return (
    <div
      className="p-3 pb-0 bg-custom-green-200 rounded-md mb-5 text-custom-black 
    flex flex-col mobile:w-4/5 mobile:max-w-[280px] tablet:min-w-[280px] mobile:h-[178px]
    tablet:h-[204px]"
    >
      <div className="mb-1">
        <input
          type="checkbox"
          id="all"
          checked={allChecked}
          onChange={(e) => handleAllCheck(e, termsList, setAllChecked, setTermsChecked, onAgree)}
          className="custom-focus"
        />
        <label htmlFor="all" className="ml-2 text-base font-semibold">
          전체 약관에 동의합니다
        </label>
      </div>
      <div className="ml-1.5 overflow-hidden">
        <CSSTransition in={isLoading} timeout={500} classNames="fade" unmountOnExit nodeRef={skeletonRef}>
          <div ref={skeletonRef}>
            <TermItemSkeleton count={termsList.length} />
          </div>
        </CSSTransition>
        <CSSTransition
          in={!isLoading && termsList.length > 0}
          timeout={500}
          classNames="fade"
          unmountOnExit
          nodeRef={termListRef}
        >
          <div ref={termListRef}>
            {termsList.map((term) => (
              <TermItem
                key={term.termsId}
                term={term}
                isChecked={termsChecked[term.termsId]}
                handleCheck={(e) =>
                  handleIndividualCheck(e, termsChecked, setTermsChecked, setAllChecked, onAgree, termsList)
                }
                openModal={openModal}
              />
            ))}
          </div>
        </CSSTransition>
      </div>
      <TermModal isOpen={isOpen} onClose={closeModal} content={currentTermContent} />
    </div>
  );
};

export default TermsAgreement;
