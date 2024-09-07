const ErrorMessages = ({ status }) => (
  <>
    {status.passwordStatus && (
      <p style={{ color: 'red' }} className="mb-2">
        {status.passwordStatus}
      </p>
    )}
    {status.emailStatus && (
      <p style={{ color: 'red' }} className="mb-2">
        {status.emailStatus}
      </p>
    )}
    {status.nicknameStatus && (
      <p style={{ color: 'red' }} className="mb-2">
        {status.nicknameStatus}
      </p>
    )}
  </>
);

export default ErrorMessages;
