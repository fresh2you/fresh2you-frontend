import IconEye from "icons/eye.svg";
import { useRef } from "react";
import "../styles/styles.css";

interface InputWithLabelProps {
  id: string;
  label: string;
  type?: "text" | "password" | "email" | "number";
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  autoComplete?: "on" | "off";
  onFocus?: () => void;
  onBlur?: () => void;
  onButtonClick?: () => void;
  noIcon?: boolean;
  withBtn?: React.ReactNode;
  className?: string;
}

const InputWithLabel = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete = "off",
  onFocus,
  onBlur,
  onButtonClick,
  noIcon,
  withBtn,
  className,
}: InputWithLabelProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;

    if (event.key === "Enter" && onButtonClick) {
      event.preventDefault();
      onButtonClick();
      return;
    }

    if (target.type === "number") {
      if (!/[0-9]/.test(event.key) && event.key !== "Backspace") {
        event.preventDefault();
      }
    }
  };

  return (
    <section className="flex flex-col w-full mb-2.5">
      <label htmlFor={id} className="mb-1 font-semibold text-custom-black text-custom-input">
        {label}
      </label>
      <div className="flex w-full gap-2">
        <input
          id={id}
          type={type}
          ref={inputRef}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={handleKeyDown}
          className={`w-full text-custom-black p-2.5 rounded 
          text-custom-input custom-focus leading-4 border border-custom-gray-light ${className}`}
        />
        {!noIcon && type === "password" && (
          <button
            type="button"
            className="h-full p-0 pr-2 bg-white border-none outline-none"
            onClick={() => {
              const inputType = inputRef.current?.type;
              if (inputRef.current) {
                if (inputType === "password") inputRef.current.type = "text";
                else inputRef.current.type = type;
              }
            }}
          >
            <IconEye />
          </button>
        )}
        {withBtn}
      </div>
    </section>
  );
};

export default InputWithLabel;
