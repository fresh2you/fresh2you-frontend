export default function InputField({ label, type, value, setValue, placeholder, autoComplete, feedback }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="font-semibold mb-1" style={{ color: '#333333' }}>
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="h-10 rounded px-1 text-custom-black border outline-none w-72  border-custom-gray-light"
        style={{ outline: 'none' }}
      />
      {feedback && (
        <ul>
          {feedback.map((msg, index) => (
            <li key={index} style={{ color: 'red' }}>
              {msg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
