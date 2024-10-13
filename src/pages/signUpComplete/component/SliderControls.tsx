import React from "react";
import HomeButton from "@/components/HomeButton";

interface SliderControlsProps {
  currentSlide: number;
  onNextSlide: () => void;
}
const SliderControls: React.FC<SliderControlsProps> = ({ currentSlide, onNextSlide }) => (
  <div className="flex space-x-4 mt-10 justify-center w-full max-w-[360px]">
    {currentSlide === 1 ? (
      <HomeButton className="bg-custom-green hover:bg-custom-green-hover text-white w-full" />
    ) : (
      <button
        className="bg-custom-green hover:bg-custom-green-hover text-white px-6 rounded-lg font-semibold 
          text-custom-btn-text py-1.5 w-full"
        onClick={onNextSlide}
      >
        다음
      </button>
    )}
  </div>
);

export default SliderControls;
