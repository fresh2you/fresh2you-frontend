import { useState } from "react";
import { CloseBtn } from "./buttons/CloseBtn";
import "../../../styles/styles.css";
import handleVerification from "../utils/handlers/handleVerification";

const EmailVerificationModal = ({ onClose, email, setStatus, handleCloseModal, isEmailValid }) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");
  const [shake, setShake] = useState(false);

  const handleVerifyClick = async () => {
    if (verificationCode) {
      try {
        await handleVerification(verificationCode, email, setStatus, handleCloseModal);
        setMessage("인증이 완료되었습니다.");
        onClose();
      } catch {
        setMessage("인증 코드가 올바르지 않습니다.");
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    } else {
      setMessage("인증 코드를 입력하세요.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-custom-black">
      <div className="bg-custom-green py-10 px-3 rounded shadow-md relative">
        <h2 className="text-lg font-semibold mb-2">이메일 인증</h2>
        <div className="flex mb-2">
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="인증 코드를 입력하세요"
            className={`border p-2 rounded custom-focus-light ${shake ? "shake" : ""}`}
          />
          <button
            type="button"
            onClick={handleVerifyClick}
            className={`px-4 whitespace-nowrap py-2 ml-2 bg-custom-gray-light font-semibold
            rounded-md custom-focus-light hover:bg-custom-gray-dark hover:text-white transition-all`}
          >
            {isEmailValid ? "완료" : "인증"}
          </button>
        </div>
        {message && <span className="text-sm text-white">{message}</span>}
        <CloseBtn onClick={onClose} />
      </div>
    </div>
  );
};

export default EmailVerificationModal;
