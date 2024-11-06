import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ParsedQs } from "qs";

const useRedirectIfNoProductQuery = (productQuery: ParsedQs | undefined) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!productQuery) {
      navigate("/");
    }
  }, [productQuery]);
};

export default useRedirectIfNoProductQuery;
