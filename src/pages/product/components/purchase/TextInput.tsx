import "../../../../styles/styles.css";

interface TextInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  readOnly?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ name, value, onChange, type = "text", readOnly = false }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="text-custom-black p-2.5 rounded text-custom-input leading-4 border border-custom-gray-light"
      readOnly={readOnly}
      tabIndex={-1}
      disabled
    />
  );
};

export default TextInput;
