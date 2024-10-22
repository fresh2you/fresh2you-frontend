import { overlay } from "overlay-kit";
import TermModal from "../components/TermModal";

const escapeString = (str: string) => {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r");
};

export const openTermModal = (content: string) => {
  const escapedContent = escapeString(content);
  const unescapedData = JSON.parse(`"${escapedContent}"`);

  overlay.open(({ isOpen, close }) => {
    return <TermModal isOpen={isOpen} onClose={close} content={unescapedData} />;
  });
};
