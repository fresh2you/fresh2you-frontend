import "../../../../styles/styles.css";

export interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (message === "SUCCESS" || message === "") return null;

  return (
    <span className="mb-2 bg-custom-gray-light py-1 px-2.5 rounded-xl shake text-red-500 text-custom-sm-p">
      {message}
    </span>
  );
};

export default ErrorMessage;
