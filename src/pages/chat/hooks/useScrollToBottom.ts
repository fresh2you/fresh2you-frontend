import { useEffect } from "react";

const useScrollToBottom = (ref: React.RefObject<HTMLElement>, dependencies: Message[]) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ref, dependencies]);
};

export default useScrollToBottom;
