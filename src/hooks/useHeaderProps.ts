import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { pageLayoutHeaderProps } from "@/stores/mypage";

const useHeaderProps = (props: pageLayoutHeaderProps) => {
  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);

  useEffect(() => {
    setHeaderProps(props);
  }, [props, setHeaderProps]);
};

export default useHeaderProps;
