import { DaumPostcodeEmbed, Address } from "react-daum-postcode";
import IconClose from "@/assets/icons/x-close.svg";

interface DaumAddressModalProps {
  isOpen: boolean;
  unmount: () => void;
  callback: (data: Address) => void;
}

const DaumAddressModal = ({ isOpen, unmount, callback }: DaumAddressModalProps) => {
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    unmount();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-3xl p-4 bg-white rounded shadow-lg h-[80%] max-h-[560px] flex flex-col gap-4">
          <header className="flex items-center justify-end w-full">
            <button type="button" onClick={onClose} className="px-0 bg-white">
              <IconClose />
            </button>
          </header>

          <DaumPostcodeEmbed
            onComplete={(data) => {
              callback(data);
              unmount();
            }}
          />
          <button
            type="button"
            onClick={onClose}
            className="p-2 mt-10 text-white transition rounded-lg hover:border-transparent bg-custom-gray-dark hover:bg-custom-green-hover focus:outline-none"
          >
            뒤로 가기
          </button>
        </div>
      </div>
    )
  );
};

export default DaumAddressModal;
