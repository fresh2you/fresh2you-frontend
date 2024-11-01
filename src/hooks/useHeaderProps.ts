import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { pageLayoutHeaderProps } from "@/stores/mypage";
import { headerWithConfirm, headerWithoutConfirm } from "@/stores/mypage";

type HeaderProps = headerWithConfirm | headerWithoutConfirm;

const useHeaderProps = (props: HeaderProps) => {
  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);

  useEffect(() => {
    setHeaderProps(props);
  }, [props, setHeaderProps]);
};

export default useHeaderProps;
