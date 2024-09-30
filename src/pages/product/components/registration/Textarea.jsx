import "../././../../../styles/styles.css";
const Textarea = ({ id, label, value, onChange, maxLength }) => {
  const displayLength = maxLength ? Math.min(value.length, maxLength) : value.length;
  const handleChange = (e) => {
    const newValue = e.target.value;

    if (!maxLength || newValue.length <= maxLength) {
      onChange(e);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-custom-p font-semibold">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        rows="4"
        className="border rounded custom-focus px-2 py-1"
        required
      />
      <p className="text-sm text-gray-500">
        {value.length}/{maxLength}
      </p>
    </div>
  );
};

export default Textarea;
