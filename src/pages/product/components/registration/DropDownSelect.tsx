import "../../../../styles/styles.css";

interface DropdownSelectProps {
  id: string;
  label: string;
  options: Category[];
  value: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({ id, label, options, value, onChange }) => {
  return (
    <div className="flex flex-col mb-2.5">
      <label htmlFor={id} className="text-custom-input font-semibold mb-1">
        {label}
      </label>
      <select id={id} value={value} onChange={onChange} className="border p-2 rounded custom-focus" required>
        <option value="" disabled>
          {label} 선택
        </option>
        {options.map((option) => (
          <option key={option.categoryId} value={option.categoryId}>
            {option.categoryName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelect;
