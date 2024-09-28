import { atom } from "jotai";

interface headerBaseProps {
  title: string;
  onBack?: () => void;
  backRoute: string;
}

interface headerWithConfirm extends headerBaseProps {
  hasConfirm: true; // hasConfirm이 true일 때
  confirmText: string; // confirmText는 필수
  onConfirm?: () => void;
}

interface headerWithoutConfirm extends headerBaseProps {
  hasConfirm: false; // hasConfirm이 false일 때
  confirmText?: null; // confirmText는 선택
  onConfirm?: null;
}

export type pageLayoutHeaderProps = headerWithConfirm | headerWithoutConfirm;

export const pageLayoutHeaderProps = atom<pageLayoutHeaderProps>({
  title: "",
  onBack: undefined,
  backRoute: "/",
  hasConfirm: false,
  confirmText: null,
  onConfirm: null,
});
