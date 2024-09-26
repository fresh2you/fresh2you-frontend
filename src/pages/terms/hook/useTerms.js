import { useState, useEffect } from "react";
import { fetchTerms } from "../api/terms";

const useTerms = (setTermsChecked) => {
  const [termsList, setTermsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTerms = async () => {
      setIsLoading(true);
      try {
        const response = await fetchTerms();
        const initialTermsChecked = {};

        const termsArray = response.data.termsList;

        termsArray.forEach((term) => {
          initialTermsChecked[term.termsId] = false;
        });

        setTermsChecked(initialTermsChecked);
        setTermsList(termsArray);
      } finally {
        setIsLoading(false);
      }
    };

    getTerms();
  }, []);

  return { termsList, isLoading };
};

export default useTerms;
