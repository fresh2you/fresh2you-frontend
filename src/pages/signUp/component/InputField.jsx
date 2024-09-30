import "../../../styles/styles.css";
export default function InputField({ label, type, value, setValue, placeholder, autoComplete }) {
  const isPasswordField = label === "비밀번호" || label === "비밀번호 확인";

  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="font-semibold mb-1 text-custom-black">
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`h-10 rounded px-1 text-custom-black border custom-focus-light
        border-custom-gray-light ${isPasswordField && "w-[260px]"} 
        ${label === "이메일 주소" && "w-[220px]"}
        ${label === "닉네임" && "w-[205px]"}
        ${label === "비밀번호" && "placeholder:mobile:text-[0.8rem]"}`}
      />
    </div>
  );
}
