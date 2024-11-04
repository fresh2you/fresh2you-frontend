import Button from "./Button";

interface PaymentOptionBtnProps {
  onPointPurchaseClick: () => void;
  onGeneralPurchaseClick: () => void;
}

const PaymentOptionBtns: React.FC<PaymentOptionBtnProps> = ({ onPointPurchaseClick, onGeneralPurchaseClick }) => {
  const options = [
    { label: "포인트로 구매하고 싶다면?", text: "포인트로 구매하기", onClick: onPointPurchaseClick },
    { label: "일반 결제를 원하시나요?", text: "결제하기", onClick: onGeneralPurchaseClick },
  ];

  return (
    <div className="mobile:mt-1 tablet-sm:mt-2">
      {options.map(({ label, text, onClick }, index) => (
        <div key={index} className="mt-2">
          <span className="text-custom-sm-p">{label}</span>
          <Button
            type="submit"
            className="ml-2 text-white bg-custom-green hover:bg-custom-green-hover"
            text={text}
            aria-label={text}
            onClick={onClick}
          />
        </div>
      ))}
    </div>
  );
};

export default PaymentOptionBtns;
