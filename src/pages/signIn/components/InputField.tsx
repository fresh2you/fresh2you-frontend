import "../../../styles/styles.css";
import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  autoComplete: string;
  onButtonClick?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  autoComplete,
  onButtonClick,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onButtonClick) {
      e.preventDefault();
      onButtonClick();
    }
  };

  return (
    <div className="mb-2 flex flex-col text-custom-black">
      <label htmlFor={id} className="font-semibold mb-1 text-custom-span">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onKeyDown={handleKeyDown}
        className="h-10 rounded px-2 border border-custom-gray-light custom-focus text-custom-span"
      />
    </div>
  );
};

export default InputField;
