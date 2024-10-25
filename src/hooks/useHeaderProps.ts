import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { pageLayoutHeaderProps } from "@/stores/mypage";

const useHeaderProps = (
  title: string,
  backRoute: string,
  hasConfirm: boolean,
  confirmText?: string,
  onConfirm?: () => void,
) => {
  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);

  useEffect(() => {
    if (hasConfirm) {
      setHeaderProps({
        title,
        backRoute,
        hasConfirm: hasConfirm,
        confirmText: confirmText as string,
        onConfirm: onConfirm,
      });
    } else {
      setHeaderProps({
        title,
        backRoute,
        hasConfirm: hasConfirm,
      });
    }
  }, [title, backRoute, hasConfirm, confirmText, onConfirm, setHeaderProps]);
};

export default useHeaderProps;
