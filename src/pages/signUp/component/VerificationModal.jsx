import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import formatTime from '../utils/timerUtils/formatTime';
import { resetSendAttemptsIfExpired } from '../utils/timerUtils/resetSendAttempts';
import { handleTimer } from '../utils/timerUtils/handleTimer';
import usePhoneNoVerification from '../hooks/usePhoneNoVerification';
import { handleVerifyClick } from '../utils/handlers/handleVerifyClick';
import { CloseBtn } from './buttons/CloseBtn';
import { ResendBtn } from './buttons/ResendBtn';
import { ConfirmBtn } from './buttons/ConfirmBtn';
import { PhoneInputField } from './PhoneInputField';
import { handleResendClick } from '../utils/handlers/handleResendClick';
export function VerificationModal({
  onClose,
  phoneNo,
  validity,
  setValidity,
  setStatus,
  sendAttempts,
  setSendAttempts,
}) {
  const [verificationCode, setVerificationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [shake, setShake] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  usePhoneNoVerification(validity, onClose, setErrorMessage, setVerificationCode);

  useEffect(() => {
    resetSendAttemptsIfExpired(setSendAttempts);
  }, []);

  useEffect(() => {
    handleTimer(timeLeft, setTimeLeft, setIsResendEnabled, setErrorMessage);
  }, [timeLeft]);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="relative bg-custom-green p-6 rounded-md shadow-lg w-80">
        <CloseBtn onClick={onClose} />
        <h2 className="text-lg font-bold mb-4" style={{ color: '#333333' }}>
          인증 코드 확인
        </h2>
        <div className="flex items-baseline">
          <PhoneInputField
            verificationCode={verificationCode}
            setVerificationCode={setVerificationCode}
            setErrorMessage={setErrorMessage}
          />
          <p className="text-sm ml-2" style={{ color: '#FFFFFF' }}>
            {formatTime(timeLeft)}
          </p>
        </div>
        {errorMessage && (
          <p className="text-sm mb-2" style={{ color: 'white' }}>
            {errorMessage}
          </p>
        )}
        <div className="flex justify-between mt-4">
          <ResendBtn
            isResendEnabled={isResendEnabled}
            onClick={() =>
              handleResendClick(
                sendAttempts,
                setErrorMessage,
                setTimeLeft,
                setIsResendEnabled,
                phoneNo,
                setStatus,
                setVerificationCode,
                setSendAttempts,
              )
            }
          />
          <ConfirmBtn
            onClick={() =>
              handleVerifyClick(timeLeft, verificationCode, phoneNo, setValidity, validity, setErrorMessage, setShake)
            }
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
