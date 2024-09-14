const DropdownSelect = ({ id, label, options, value, onChange, required }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-lg font-semibold">
      {label}
    </label>
    <select id={id} value={value} onChange={onChange} className="border p-2 rounded outline-none" required={required}>
      <option value="" disabled>
        {label} 선택
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default DropdownSelect;
