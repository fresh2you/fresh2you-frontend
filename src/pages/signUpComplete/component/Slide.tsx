import React from "react";

interface SlideProps {
  title: string;
  description: string;
  imgSrc: JSX.Element;
}

const Slide: React.FC<SlideProps> = ({ title, description, imgSrc }) => (
  <div className="slide flex flex-col justify-center items-center desktop-sm:flex-row desktop-sm:items-start desktop-sm:gap-x-2">
    <div className="flex flex-col mb-1 desktop-sm:w-96">
      <h1 className="font-semibold text-custom-green text-custom-h2 whitespace-nowrap">{title}</h1>
      <p className="mt-1 text-custom-p">{description}</p>
    </div>
    {imgSrc}
  </div>
);

export default Slide;
