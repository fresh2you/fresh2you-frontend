import "../../../../styles/styles.css";
const TextInput = ({ name, value, onChange, type = "text", readOnly, extraStyle }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`${extraStyle} py-1.5 px-2 border border-gray-300 rounded focus:outline-none ${
        name === "address"
          ? "w-full"
          : name === "detailedAddress"
          ? "w-2/3"
          : "mobile:w-1/2 mobile:max-w-[220px] tablet:max-w-[240px] custom-focus "
      }"
      }`}
      readOnly={readOnly}
    />
  );
};

export default TextInput;
