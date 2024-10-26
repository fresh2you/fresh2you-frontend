import { RefObject } from "react";

export function formatCurrency(value: number) {
  return value.toLocaleString("ko-KR");
}

export function formatPriceInput(value: string) {
  if (!value) return "";
  const number = Number(value.replace(/,/g, ""));
  return formatCurrency(number);
}

export const inputUtils = {
  handleTogglePasswordVisibility: (
    inputRef: RefObject<HTMLInputElement>,
    isPasswordVisible: boolean,
    setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setIsPasswordVisible(!isPasswordVisible);
    if (inputRef.current) {
      inputRef.current.type = isPasswordVisible ? "password" : "text";
    }
  },

  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, onButtonClick: (() => void) | undefined, type: string) => {
    if (e.key === "Enter" && onButtonClick) {
      e.preventDefault();
      onButtonClick();
    } else if (type === "number" && !/[0-9]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  },

  handleMaxLengthChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    maxLength: number | undefined,
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined,
  ) => {
    const newValue = e.target.value;
    if ((!maxLength || newValue.length <= maxLength) && onChange) {
      onChange(e);
    }
  },
};
