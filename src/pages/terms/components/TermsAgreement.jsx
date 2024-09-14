import { useState } from 'react';
import ArrowDownIcon from '../../../assets/icons/arrow-down.svg';
import ArrowUpIcon from '../../../assets/icons/arrow-up.svg';

const TermsAgreement = ({ onAgree }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState({
    termsOfService: false,
    privacyPolicy: false,
    ecommerceContract: false,
  });
  const [isOpen, setIsOpen] = useState({
    termsOfService: false,
    privacyPolicy: false,
    ecommerceContract: false,
  });

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
    setTermsChecked({
      termsOfService: checked,
      privacyPolicy: checked,
      ecommerceContract: checked,
    });
    onAgree(checked);
  };

  const toggleOpen = (term) => {
    setIsOpen((prevState) => ({ ...prevState, [term]: !prevState[term] }));
  };

  const renderTerm = (id, label, content) => (
    <div className="mb-3 w-64">
      <div className="flex items-center cursor-pointer justify-between">
        <div>
          <input
            type="checkbox"
            id={id}
            name={id}
            checked={termsChecked[id]}
            onChange={handleIndividualCheck}
            className="outline-none"
          />
          <label htmlFor={id} className="ml-2 text-sm">
            {label}
          </label>
        </div>
        {isOpen[id] ? (
          <ArrowUpIcon className="ml-2 w-4 h-4" onClick={() => toggleOpen(id)} />
        ) : (
          <ArrowDownIcon className="ml-2 w-4 h-4" onClick={() => toggleOpen(id)} />
        )}
      </div>
      {isOpen[id] && <div className="mt-2 text-sm bg-white p-2 rounded-md">{content}</div>}
    </div>
  );

  return (
    <div className="p-4 bg-custom-green-200 rounded-lg mb-4 text-custom-black flex flex-col">
      <div className="mb-4">
        <input type="checkbox" id="all" checked={allChecked} onChange={handleAllCheck} className="outline-none" />
        <label htmlFor="all" className="ml-2 text-base font-semibold">
          전체 약관에 동의합니다
        </label>
      </div>

      <div className="ml-4">
        {renderTerm(
          'termsOfService',
          '(필수) 이용약관 동의',
          '이 약관은 Fresh 2 You가 운영하는 사이트의 서비스 이용조건과 절차, 회사와 회원 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.',
        )}
        {renderTerm(
          'privacyPolicy',
          '(필수) 개인정보 처리방침 동의',
          'Fresh 2 You는 회원의 개인정보를 보호하며, 관련 법령에 따라 개인정보를 처리하고 있습니다',
        )}
        {renderTerm(
          'ecommerceContract',
          '(필수) 전자상거래 계약 동의',
          'Fresh 2 You는 전자상거래법에 따라 공정한 거래를 보장하고, 회원의 권리와 의무를 보호하기 위해 전자상거래 표준약관을 준수합니다. 회원은 본 약관에 동의함으로써, 회사와의 거래 절차에 따른 책임과 권리를 명확히 이해하고 이에 동의합니다.',
        )}
      </div>
    </div>
  );
};

export default TermsAgreement;
