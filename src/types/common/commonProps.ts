export interface InputWithLabelProps {
  id: string;
  label: string;
  type?: "text" | "password" | "email" | "number" | "tel";
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  maxLength?: number;
  autoComplete?: "on" | "off";
  onFocus?: () => void;
  onBlur?: () => void;
  onButtonClick?: () => void;
  noIcon?: boolean;
  withBtn?: React.ReactNode;
  className?: string;
  showLength?: boolean;
}
