import React, { useState, useRef } from "react";
import IconEye from "icons/eye.svg";
import "../styles/styles.css";
import { inputUtils } from "../utils/commonUtils";
import { InputWithLabelProps } from "@/types/common/commonProps";

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  maxLength,
  autoComplete = "off",
  onFocus,
  onBlur,
  onButtonClick,
  noIcon,
  withBtn,
  className = "",
  showLength = true,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const displayLength = maxLength ? Math.min(value.length, maxLength) : value.length;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <section className="flex flex-col w-full mb-2.5">
      <label htmlFor={id} className="mb-1 font-semibold text-custom-black text-custom-input">
        {label}
      </label>
      <div className="flex w-full gap-2">
        <input
          id={id}
          type={isPasswordVisible && type === "password" ? "text" : type}
          ref={inputRef}
          value={value}
          onChange={(e) => inputUtils.handleChange(e, maxLength, onChange)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={(e) => inputUtils.handleKeyDown(e, onButtonClick, type)}
          maxLength={maxLength}
          className={`w-full text-custom-black p-2.5 rounded text-custom-input custom-focus leading-4 
          border border-custom-gray-light ${className} ${id === "price" ? "w-1/2" : "w-full"}`}
          required
          aria-required="true"
          aria-labelledby={`label-${id}`}
        />
        {!noIcon && type === "password" && (
          <button
            type="button"
            aria-pressed={isPasswordVisible}
            aria-label={isPasswordVisible ? "비밀번호 숨기기" : "비밀번호 표시"}
            className="h-full p-0 pr-2 bg-white border-none outline-none"
            onClick={() => inputUtils.handleTogglePasswordVisibility(inputRef, isPasswordVisible, setIsPasswordVisible)}
          >
            <IconEye />
          </button>
        )}
        {withBtn}
      </div>
      {showLength && maxLength && (
        <p className="text-sm text-gray-500 mt-0.5" aria-live="polite">
          {displayLength}/{maxLength}
        </p>
      )}
    </section>
  );
};

export default InputWithLabel;
