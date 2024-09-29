import TextInput from "./TextInput";
const InputField = ({ label, name, value, onChange, type = "text", readOnly = false }) => {
  return (
    <div className={`${name === "address" ? "mb-0" : "mb-4"}`}>
      <label className="block text-custom-p font-semibold mb-2">{label}</label>
      <TextInput name={name} value={value} onChange={onChange} type={type} readOnly={readOnly} />
    </div>
  );
};

export default InputField;
