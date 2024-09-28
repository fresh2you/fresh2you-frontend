import { pageLayoutHeaderProps } from "@/stores/mypage";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import InputWithLabel from "@/components/InputWithLabel";

const ChangePasswordPage = () => {
  const [formData, setFormData] = useState({
    prevPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    setHeaderProps({
      title: "비밀번호 변경",
      hasConfirm: false,
      backRoute: "/mypage",
    });
  }, [setHeaderProps]);

  // TODO: API 및 비밀번호 포맷 검사 추가 예정

  return (
    <div className="flex justify-center w-full h-full pb-[4.5rem]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
        className="relative flex flex-col justify-center w-2/3 h-full gap-4 max-w-80"
      >
        <InputWithLabel
          id={"prevPassword"}
          label={"기존 비밀번호 입력"}
          type={"password"}
          value={formData.prevPassword}
          onChange={onChange}
          placeholder={"1"}
          autoComplete={"off"}
        />
        <InputWithLabel
          id={"newPassword"}
          label={"새 비밀번호 입력"}
          type={"password"}
          value={formData.newPassword}
          onChange={onChange}
          placeholder={"2"}
          autoComplete={"off"}
        />
        <InputWithLabel
          id={"confirmNewPassword"}
          label={"새 비밀번호 다시 입력"}
          type={"password"}
          value={formData.confirmNewPassword}
          onChange={onChange}
          placeholder={"3"}
          autoComplete={"off"}
        />

        <button type="submit" className="absolute bottom-0 w-full py-2 font-bold text-white bg-custom-green">
          비밀번호 변경하기
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
