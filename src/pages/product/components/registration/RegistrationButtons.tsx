import Button from "../buttons/Button";
import { isFormValidAtom } from "../../atom/atom";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

const RegistrationButtons = () => {
  const [isFormValid] = useAtom(isFormValidAtom);
  const navigate = useNavigate();

  return (
    <section className="flex justify-center gap-2">
      <Button
        type="submit"
        className={`bg-custom-green text-white hover:bg-custom-green-hover order-2 desktop-sm:order-1 ${
          isFormValid ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        text="등록하기"
        aria-label="등록하기"
        disabled={!isFormValid}
      />
      <Button
        className="bg-custom-gray-light text-custom-black hover:bg-custom-gray-dark order-1 desktop-sm:order-2"
        text="취소"
        onClick={(e) => {
          e.preventDefault();
          navigate("/mypage");
        }}
      />
    </section>
  );
};

export default RegistrationButtons;
