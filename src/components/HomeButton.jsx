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
      className={`px-2 py-2 text-xs tablet-sm:text-sm desktop-sm:text-base
        tablet-sm:px-3 font-semibold rounded-lg ${className} transition 
        hover:border-transparent custom-focus`}
    >
      홈으로 이동
    </button>
  );
};

export default HomeButton;
