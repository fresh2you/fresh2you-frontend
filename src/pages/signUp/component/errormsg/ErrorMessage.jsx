import "../../../../styles/styles.css";
const ErrorMessage = ({ message }) => {
  if (message === "SUCCESS" || message === "") return null;

  return (
    <span
      className="mb-2 bg-custom-gray-light px-2 py-1 rounded-xl 
  text-sm shake text-red-500"
    >
      {message}
    </span>
  );
};

export default ErrorMessage;
