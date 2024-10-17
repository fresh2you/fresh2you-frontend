import "../styles/styles.css";
import { Link } from "react-router-dom";

interface HomeButtonProps {
  className?: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ className = "" }) => {
  return (
    <Link
      to={"/"}
      className={`px-2 py-1.5 font-semibold rounded-lg ${className} transition 
      custom-focus text-custom-btn-text`}
    >
      홈으로 이동
    </Link>
  );
};

export default HomeButton;
