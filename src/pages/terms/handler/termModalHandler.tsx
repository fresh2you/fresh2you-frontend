import { overlay } from "overlay-kit";
import TermModal from "../components/TermModal";

export const openTermModal = (content: string) => {
  const unescapedData = JSON.parse(`"${content}"`);
  overlay.open(({ isOpen, close }) => {
    return <TermModal isOpen={isOpen} onClose={close} content={unescapedData} />;
  });
};
