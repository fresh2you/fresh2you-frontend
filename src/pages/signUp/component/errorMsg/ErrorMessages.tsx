import ErrorMessage from "./ErrorMessage";

interface ErrorMessagesProps {
  status: StatusType;
}

const ErrorMessages: React.FC<ErrorMessagesProps> = ({ status }) => (
  <>
    <ErrorMessage message={status.nicknameStatus} />
    <ErrorMessage message={status.passwordStatus} />
    <ErrorMessage message={status.emailStatus} />
  </>
);

export default ErrorMessages;
