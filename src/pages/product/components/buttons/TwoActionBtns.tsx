import Button from "./Button";

interface TwoActionBtnsProps {
  primaryText: string;
  primaryOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  secondaryText: string;
  secondaryOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  extraClassName?: string;
}

const TwoActionBtns = ({
  primaryText,
  primaryOnClick,
  secondaryText,
  secondaryOnClick,
  extraClassName,
}: TwoActionBtnsProps) => {
  return (
    <section className={`flex justify-center gap-2 ${extraClassName}`}>
      <Button
        type="submit"
        className="order-2 text-white bg-custom-green hover:bg-custom-green-hover desktop-sm:order-1"
        text={primaryText}
        aria-label={primaryText}
        onClick={primaryOnClick}
      />
      <Button
        className="order-1 bg-custom-gray-light text-custom-black hover:bg-custom-gray-dark desktop-sm:order-2 hover:text-white"
        text={secondaryText}
        aria-label={secondaryText}
        onClick={secondaryOnClick}
      />
    </section>
  );
};

export default TwoActionBtns;
