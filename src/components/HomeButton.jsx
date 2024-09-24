import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
const HomeButton = ({ className }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleGoHome}
      className={`px-2 py-2 tablet-sm:px-2.5 font-semibold rounded-lg ${className} transition 
        hover:border-transparent custom-focus text-custom-btn-text`}
    >
      홈으로 이동
    </button>
  );
};

export default HomeButton;
