import { CloseBtn } from "@/pages/signUp/component/buttons/CloseBtn";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white rounded-lg py-4 px-4 h-3/5 overflow-auto mobile:w-11/12 mobile:max-w-[394px]
        tablet-sm:w-4/5  tablet-sm:max-w-[500px] tablet:w-3/5 tablet:max-w-[700px]"
      >
        <CloseBtn onClick={onClose} />
        <div dangerouslySetInnerHTML={{ __html: content }} className="modal-content"></div>
      </div>
    </div>
  );
};

export default Modal;
