import { instance } from "@/instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useVerifySellerPageLogics = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({ name: "", phone: "", code: "" });

  const { mutateAsync: patchUserRole } = useMutation({
    mutationFn: async () => {
      const result = await instance.patch("/userInfo", {
        role: "seller",
      });

      return result;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      navigate(-1);
    },
  });

  const onKeyDownCheckNumber = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // 숫자나 엔터가 아닌 입력을 차단
    if (!/[0-9]/.test(event.key) && event.key !== "Backspace") {
      event.preventDefault();
    }
  };

  const checkPhoneFormat = (phoneNumber: string) => {
    // -를 표기할지 말지 고민 중
    const phoneRegExp = /^\d{2,3}\d{3,4}\d{4}$/;
    const result = phoneRegExp.test(phoneNumber);

    return result;
  };

  const onClickPhoneConfirm = () => {
    const isCorrect = checkPhoneFormat(formData.phone);
    if (!isCorrect) {
      return alert("올바르지 않은 전화번호 입니다.");
    }

    // TODO: 이메일 인증 로직 예정
  };

  const onChangeFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;
    const checkLength: Record<string, number> = { name: 5, phone: 11, code: 6 };

    if (value.length <= checkLength[id]) {
      setFormData((prevProps) => ({
        ...prevProps,
        [id]: value,
      }));
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value === "")) {
      alert("모든 필드를 채워주세요.");
      return;
    }

    console.table(formData);
    patchUserRole();
  };

  return {
    patchUserRole,
    formData,
    setFormData,
    onKeyDownCheckNumber,
    checkPhoneFormat,
    onClickPhoneConfirm,
    onChangeFormData,
    onSubmit,
  };
};

export default useVerifySellerPageLogics;
