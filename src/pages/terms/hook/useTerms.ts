import { useState, useEffect } from "react";
import termsAPI from "@/services/api/termsAPI";
interface Term {
  termsId: string;
  title: string;
  content: string;
  isRequired: boolean;
}

const useTerms = (setTermsChecked: (initialTermsChecked: Record<string, boolean>) => void): Term[] => {
  const [termsList, setTermsList] = useState<Term[]>([]);

  useEffect(() => {
    const getTerms = async () => {
      try {
        const response = await termsAPI.getAllTerms();
        const initialTermsChecked: Record<string, boolean> = {};

        const termsArray: Term[] = response.data.termsList;

        termsArray.forEach((term) => {
          initialTermsChecked[term.termsId] = false;
        });

        setTermsChecked(initialTermsChecked);
        setTermsList(termsArray);
      } catch (error) {
        console.error("Failed to fetch terms:", error);
      }
    };

    getTerms();
  }, [setTermsChecked]);

  return termsList;
};

export default useTerms;
