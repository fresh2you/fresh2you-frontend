import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

interface HomeButtonProps {
  className?: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleGoHome}
      className={`px-2 py-1.5 font-semibold rounded-lg ${className} transition 
      custom-focus text-custom-btn-text`}
    >
      홈으로 이동
    </button>
  );
};

export default HomeButton;
