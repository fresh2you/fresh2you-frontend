import { useEffect, useRef } from "react";

const useInfiniteScroll = (hasMore, setPageNumber) => {
  const observer = useRef();

  const lastProductRef = (node) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });

    if (node) observer.current.observe(node);
  };

  return { lastProductRef };
};

export default useInfiniteScroll;
