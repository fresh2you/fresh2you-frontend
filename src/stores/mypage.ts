import { atom } from "jotai";
import { CommonHeaderProps } from "@/components/CommonHeader";

export const myPageHeaderProps = atom<CommonHeaderProps>({
  title: "",
  onBack: undefined,
  hasConfirm: false,
  confirmText: null,
  onConfirm: null,
});
