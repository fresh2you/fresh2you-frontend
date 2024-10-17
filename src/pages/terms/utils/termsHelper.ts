export const handleIndividualCheck = (
  e: React.ChangeEvent<HTMLInputElement>,
  termsChecked: Record<string, boolean>,
  setTermsChecked: (updatedTerms: Record<string, boolean>) => void,
  setAllChecked: (checked: boolean) => void,
  onAgree: (agreed: boolean) => void,
  termsList: { termsId: string; title: string; content: string; isRequired: boolean }[],
): void => {
  const { id, checked } = e.target;
  const updatedTerms = { ...termsChecked, [id]: checked };

  setTermsChecked(updatedTerms);

  const allTermsChecked = termsList.every((term) => updatedTerms[term.termsId]);

  setAllChecked(allTermsChecked);
  onAgree(allTermsChecked);
};

export const handleAllCheck = (
  e: React.ChangeEvent<HTMLInputElement>,
  termsList: { termsId: string; title: string; content: string; isRequired: boolean }[],
  setAllChecked: (checked: boolean) => void,
  setTermsChecked: (updatedTerms: Record<string, boolean>) => void,
  onAgree: (agreed: boolean) => void,
): void => {
  const { checked } = e.target;
  setAllChecked(checked);

  const updatedTerms: Record<string, boolean> = {};
  termsList.forEach((term) => {
    updatedTerms[term.termsId] = checked;
  });

  setTermsChecked(updatedTerms);
  onAgree(checked);
};

export const checkRequiredTermsAgreed = (termsChecked: Record<string, boolean>): boolean => {
  const requiredTerms = ["1", "2", "3"];
  return requiredTerms.every((termId) => termsChecked[termId]);
};
