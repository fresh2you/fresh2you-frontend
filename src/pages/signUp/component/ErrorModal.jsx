import { CloseBtn } from "./buttons/CloseBtn";
import "../../../styles/styles.css";
const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex h-28 mobile:top-[3%] tablet:top-[10%] desktop-sm:top-[7%] justify-center text-custom-black bg-opacity-50 shake">
      <div className="bg-custom-gray-light p-6 rounded shadow-md flex flex-col relative">
        <h2 className="text-lg font-semibold">확인해주세요!</h2>
        <p className="whitespace-pre-line mt-2">{message}</p>
        <CloseBtn onClick={onClose} />
      </div>
    </div>
  );
};

export default ErrorModal;
