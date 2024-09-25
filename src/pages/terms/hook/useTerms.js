import { useState, useEffect } from "react";
import { fetchTerms } from "../api/terms";

const useTerms = (setTermsChecked) => {
  const [termsList, setTermsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTerms = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTerms();
        const initialTermsChecked = {};
        data.forEach((term) => {
          initialTermsChecked[term.termsId] = false;
        });
        setTermsChecked(initialTermsChecked);
        setTermsList(data);
      } finally {
        setIsLoading(false);
      }
    };

    getTerms();
  }, [setTermsChecked]);

  return { termsList, isLoading };
};

export default useTerms;
