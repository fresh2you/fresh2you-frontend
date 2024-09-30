import TextInput from "./TextInput";
const InputField = ({ label, name, value, onChange, type = "text", readOnly = false, extraStyle }) => {
  return (
    <div className={extraStyle}>
      <label className="block mb-2 font-semibold text-custom-p">{label}</label>
      <TextInput name={name} value={value} onChange={onChange} type={type} readOnly={readOnly} />
    </div>
  );
};

export default InputField;
