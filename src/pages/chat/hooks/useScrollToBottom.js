import { useEffect } from "react";

const useScrollToBottom = (ref, dependencies) => {
  useEffect(() => {
    if (ref.current) {
      const { scrollHeight, clientHeight } = ref.current;
      const isAtBottom = scrollHeight <= clientHeight + ref.current.scrollTop + 1;

      if (isAtBottom) {
        ref.current.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }, dependencies);
};

export default useScrollToBottom;
