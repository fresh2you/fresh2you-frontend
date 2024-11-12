import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ParsedQs } from "qs";
import { resetPurchaseState } from "../utils/purchaseHandlers";
import { useSetAtom } from "jotai";
import { quantityAtom, recipientDetailsAtom } from "../../common/atom/atom";

const useRedirectAndReset = (productQuery: ParsedQs | undefined) => {
  const navigate = useNavigate();
  const setRecipientDetails = useSetAtom(recipientDetailsAtom);
  const setQuantity = useSetAtom(quantityAtom);

  useEffect(() => {
    if (!productQuery) {
      navigate("/");
    } else {
      resetPurchaseState(setQuantity, setRecipientDetails);
    }
  }, [productQuery]);
};

export default useRedirectAndReset;
