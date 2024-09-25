import ErrorMessage from "./ErrorMessage";
const ErrorMessages = ({ status }) => (
  <>
    <ErrorMessage message={status.passwordStatus} />
    <ErrorMessage message={status.emailStatus} />
    <ErrorMessage message={status.nicknameStatus} />
  </>
);

export default ErrorMessages;
