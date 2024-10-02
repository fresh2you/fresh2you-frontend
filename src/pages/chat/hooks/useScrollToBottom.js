import { useEffect } from "react";

const useScrollToBottom = (ref, dependencyArray) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, dependencyArray);
};

export default useScrollToBottom;
