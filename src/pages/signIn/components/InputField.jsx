export default function InputField({ id, label, type, value, onChange, placeholder, autoComplete }) {
  return (
    <div className="mb-2 flex flex-col">
      <label htmlFor={id} className="font-semibold mb-1" style={{ color: '#333333' }}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="h-10 rounded px-2 text-white border w-72 outline-none border-custom-gray-light"
      />
    </div>
  );
}
