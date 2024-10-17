import { useState } from "react";
import { CloseBtn } from "@/components/CloseBtn";
import "../../../styles/styles.css";
import { handleVerifyClick } from "../utils/handlers/handleVerifyClick";
import InputWithLabel from "@/components/InputWithLabel";
import { ActionButton } from "./buttons/ActionButton";

interface EmailVerificationModalProps {
  onClose: () => void;
  email: string;
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>;
  isEmailValid: boolean;
  isOpen: boolean;
}

const EmailVerificationModal: React.FC<EmailVerificationModalProps> = ({
  onClose,
  email,
  setStatus,
  isEmailValid,
  isOpen,
}) => {
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [message, setMessage] = useState<string>("인증 코드가 전송되었습니다.");
  const [shake, setShake] = useState<boolean>(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-custom-black">
      <div className="bg-custom-green py-8 px-6 rounded shadow-md relative w-11/12 max-w-[368px] -mt-72">
        <InputWithLabel
          id="인증코드"
          label="인증코드"
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          placeholder="인증 코드를 입력하세요"
          autoComplete="off"
          className={`${shake ? "shake" : ""}`}
          withBtn={
            <ActionButton
              isValid={!isEmailValid}
              onClick={() => handleVerifyClick(verificationCode, email, setStatus, onClose, setMessage, setShake)}
              text={{ valid: "완료", invalid: "인증" }}
              isSmallBtn={true}
              isModal={true}
            />
          }
        />
        {message && <span className="text-custom-btn-text text-white">{message}</span>}
        <CloseBtn onClick={onClose} />
      </div>
    </div>
  );
};

export default EmailVerificationModal;
