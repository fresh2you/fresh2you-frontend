import { DaumPostcodeEmbed, Address } from "react-daum-postcode";

interface DaumAddressModalProps {
  isOpen: boolean;
  unmount: () => void;
  callback: (data: Address) => void;
}

const DaumAddressModal = ({ isOpen, unmount, callback }: DaumAddressModalProps) => {
  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-3xl p-4 bg-white rounded shadow-lg">
          <DaumPostcodeEmbed
            onComplete={(data) => {
              callback(data);
              unmount();
            }}
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              unmount();
            }}
            className="text-white transition bottom-6 right-8 hover:border-transparent bg-custom-green hover:bg-custom-green-hover focus:outline-none"
          >
            뒤로 가기
          </button>
        </div>
      </div>
    )
  );
};

export default DaumAddressModal;
