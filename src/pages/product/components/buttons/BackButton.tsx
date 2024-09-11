import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="text-custom-green hover:underline w-24 border whitespace-nowrap hover:border-transparent focus:outline-none"
      onClick={() => navigate(-1)}
    >
      &larr; Back
    </button>
  );
};

export default BackButton;
