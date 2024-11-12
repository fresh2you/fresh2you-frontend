import { useRef } from "react";

interface UseInfiniteScrollProps {
  hasMore: boolean;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const useInfiniteScroll = ({ hasMore, setPageNumber }: UseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastProductRef = (node: Element | null) => {
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
