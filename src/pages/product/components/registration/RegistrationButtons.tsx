import Button from "../buttons/Button";
import { NavigateFunction } from "react-router-dom";

interface RegistrationButtonsProps {
  isFormValid: boolean;
  navigate: NavigateFunction;
}

const RegistrationButtons = ({ isFormValid, navigate }: RegistrationButtonsProps) => {
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
