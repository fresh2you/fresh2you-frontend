import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { pageLayoutHeaderProps } from "@/stores/mypage";

const useHeaderProps = () => {
  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);

  useEffect(() => {
    setHeaderProps({
      title: "",
      hasConfirm: false,
      backRoute: "../",
    });
  }, [setHeaderProps]);
};

export default useHeaderProps;
