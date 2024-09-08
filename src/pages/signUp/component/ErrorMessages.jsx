import ErrorMessage from './errorMsgs/ErrorMessage';
const ErrorMessages = ({ status, sendAttempts }) => (
  <>
    <ErrorMessage message={status.passwordStatus} />
    <ErrorMessage message={status.emailStatus} />
    <ErrorMessage message={status.nicknameStatus} />
    <ErrorMessage message={status.phoneNoStatus} />
    {sendAttempts === 5 && <ErrorMessage message="하루에 5번만 인증 코드를 요청할 수 있습니다." />}
  </>
);

export default ErrorMessages;
