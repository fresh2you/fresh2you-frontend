import IconEye from "icons/eye.svg";
import { useRef } from "react";

interface InputWithLabelProps {
  id: string;
  label: string;
  type: "text" | "password" | "email" | "number";
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  autoComplete?: "on" | "off";
}

const InputWithLabel = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  autoComplete = "off",
}: InputWithLabelProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <section className="flex flex-col mb-2">
      <label htmlFor={id} className="mb-1 font-bold" style={{ color: "#333333" }}>
        {label}
      </label>
      <div className="flex items-center w-full gap-2 p-2 border rounded border-custom-gray-dark">
        <input
          id={id}
          type={type}
          ref={inputRef}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full text-black outline-none max-h-10"
        />
        {type === "password" && (
          <button
            type="button"
            className="h-full p-0 bg-white"
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
      </div>
    </section>
  );
};

export default InputWithLabel;
