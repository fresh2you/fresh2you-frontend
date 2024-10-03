import InputWithLabel from "@/components/InputWithLabel";
import useAddDeliveryModalLogics from "@/pages/mypage/deliveries/hooks/useAddDeliveryModalLogics";
import IconClose from "@/assets/icons/x-close.svg";

interface AddDeliveryModal {
  isOpen: boolean;
  unmount: () => void;
}

const AddDeliveryModal = ({ isOpen, unmount }: AddDeliveryModal) => {
  const { onSubmit, inputs, onChangeFormData } = useAddDeliveryModalLogics();

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative flex justify-center w-full max-w-3xl p-4 pb-10 bg-white rounded shadow-lg">
          <form
            onSubmit={onSubmit}
            /* 특정 사이즈 이상 되면 input은 start, 버튼은 end로 */
            className="relative flex flex-col items-center justify-center w-full h-full gap-0 p-0 pb-20 max-w-80"
          >
            <header className="flex items-center justify-end w-full">
              <button type="button" onClick={unmount} className="p-0 bg-white">
                <IconClose />
              </button>
            </header>

            {inputs.map(({ id, label, value, placeholder, onfocus }) => (
              <InputWithLabel
                key={id}
                id={id}
                type={id === "phone" ? `number` : "text"}
                label={label}
                value={value}
                onChange={onChangeFormData}
                placeholder={placeholder}
                onFocus={onfocus}
              />
            ))}

            <button
              type="submit"
              className="absolute bottom-0 w-full py-2 font-bold text-white rounded-lg bg-custom-green"
            >
              배송지 추가하기
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default AddDeliveryModal;
