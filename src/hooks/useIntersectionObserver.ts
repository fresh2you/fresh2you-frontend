import { useCallback, useEffect, useRef } from "react";

const useIntersectionObserver = ({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  loadMoreRef,
}: {
  fetchNextPage: () => void | Promise<unknown>;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  loadMoreRef: React.RefObject<HTMLDivElement>;
}) => {
  const observerRef = useRef<IntersectionObserver>();

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;

      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage],
  );

  useEffect(() => {
    const element = loadMoreRef.current;

    if (!element) return;

    observerRef.current = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver, loadMoreRef]);

  return 1;
};

export default useIntersectionObserver;
