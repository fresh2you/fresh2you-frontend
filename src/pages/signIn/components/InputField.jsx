import "../../../styles/styles.css";
export default function InputField({ id, label, type, value, onChange, placeholder, autoComplete }) {
  return (
    <div className="mb-2 flex flex-col text-custom-black">
      <label htmlFor={id} className="font-semibold mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="h-10 rounded px-2 border w-72 border-custom-gray-light custom-focus"
      />
    </div>
  );
}
