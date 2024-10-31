import Button from "./Button";

interface TwoActionBtnsProps {
  primaryText: string;
  primaryOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  secondaryText: string;
  secondaryOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isPrimaryDisabled?: boolean;
  extraClassName?: string;
}

const TwoActionBtns = ({
  primaryText,
  primaryOnClick,
  secondaryText,
  secondaryOnClick,
  isPrimaryDisabled = false,
  extraClassName,
}: TwoActionBtnsProps) => {
  return (
    <section className={`flex justify-center gap-2 ${extraClassName}`}>
      <Button
        type="submit"
        className={`bg-custom-green text-white hover:bg-custom-green-hover order-2 desktop-sm:order-1 ${
          isPrimaryDisabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        text={primaryText}
        aria-label={primaryText}
        onClick={primaryOnClick}
        disabled={isPrimaryDisabled}
      />
      <Button
        className="order-1 bg-custom-gray-light text-custom-black hover:bg-custom-gray-dark desktop-sm:order-2"
        text={secondaryText}
        aria-label={secondaryText}
        onClick={secondaryOnClick}
      />
    </section>
  );
};

export default TwoActionBtns;
