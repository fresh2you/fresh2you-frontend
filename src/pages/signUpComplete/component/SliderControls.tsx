import { useNavigate } from "react-router-dom";
import "../../../styles/styles.css";

interface SliderControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNextSlide: () => void;
  onPreviousSlide: () => void;
}

const SliderControls: React.FC<SliderControlsProps> = ({ currentSlide, totalSlides, onNextSlide, onPreviousSlide }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex space-x-4 mt-10 justify-center w-full max-w-[360px]">
      {currentSlide > 0 && (
        <button
          className="bg-custom-gray-light hover:bg-custom-gray-dark hover:text-white text-custom-black action-btn"
          onClick={onPreviousSlide}
        >
          이전
        </button>
      )}
      <button
        className={`bg-custom-green hover:bg-custom-green-hover text-white action-btn ${
          currentSlide === 0 ? "w-full" : ""
        }`}
        onClick={currentSlide === totalSlides - 1 ? handleGoHome : onNextSlide}
      >
        {currentSlide === totalSlides - 1 ? "홈으로 이동" : "다음"}
      </button>
    </div>
  );
};

export default SliderControls;
