export const handleIndividualCheck = (e, termsChecked, setTermsChecked, setAllChecked, onAgree, termsList) => {
  const { id, checked } = e.target;
  const updatedTerms = { ...termsChecked, [id]: checked };

  setTermsChecked(updatedTerms);

  const allTermsChecked = termsList.every((term) => updatedTerms[term.termsId]);

  setAllChecked(allTermsChecked);
  onAgree(allTermsChecked);
};

export const handleAllCheck = (e, termsList, setAllChecked, setTermsChecked, onAgree) => {
  const { checked } = e.target;
  setAllChecked(checked);

  const updatedTerms = {};
  termsList.forEach((term) => {
    updatedTerms[term.termsId] = checked;
  });

  setTermsChecked(updatedTerms);
  onAgree(checked);
};
export const checkRequiredTermsAgreed = (termsChecked) => {
  const requiredTerms = [1, 2, 3];
  return requiredTerms.every((termId) => termsChecked[termId]);
};
