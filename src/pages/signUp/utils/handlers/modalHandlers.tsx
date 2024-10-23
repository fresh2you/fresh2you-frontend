import EmailVerificationModal from "../../component/EmailVerificationModal";
import { overlay } from "overlay-kit";

export const openVerificationModal = (
  email: string,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
  isEmailValid: boolean,
) => {
  overlay.open(({ isOpen, close }) => (
    <EmailVerificationModal
      onClose={close}
      email={email}
      setStatus={setStatus}
      isEmailValid={isEmailValid}
      isOpen={isOpen}
    />
  ));
};
