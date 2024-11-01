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
    <section className="flex flex-col mb-2.5">
      <label htmlFor={id} className="mb-1 font-semibold text-custom-input">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="p-2 border rounded custom-focus-light border-custom-gray-light"
        required
        aria-required="true"
        aria-labelledby="label-image"
      >
        {options.map((option) => (
          <option key={option.categoryId} value={option.categoryId}>
            {option.categoryName}
          </option>
        ))}
      </select>
    </section>
  );
};

export default DropdownSelect;
