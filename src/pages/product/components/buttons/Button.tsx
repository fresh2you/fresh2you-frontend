import { FC } from "react";

type ButtonProps = {
  className?: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

const Button: FC<ButtonProps> = ({ className = "", text, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      className={`mobile:py-1 px-2.5 rounded-md tablet-sm:py-1.5
        transition font-semibold ${className} custom-focus-light text-custom-btn-text whitespace-nowrap`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
