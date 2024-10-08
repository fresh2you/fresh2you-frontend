import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/img/sliders/slider1.png";
import slider2 from "../../assets/img/sliders/slider2.png";
import slider3 from "../../assets/img/sliders/slider3.png";
import HomeButton from "../../components/HomeButton";
import { useRef } from "react";
import { useState } from "react";
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
};

const Slide = ({ title, description, imgSrc, imgAlt }) => (
  <div className="slide flex flex-col justify-center items-center desktop-sm:flex-row desktop-sm:items-start desktop-sm:gap-x-2">
    <div className="flex flex-col mb-1 desktop-sm:w-96">
      <h1 className="mobile:text-2xl font-bold text-custom-green tablet-sm:text-3xl">{title}</h1>
      <p className="mt-1 mobile:text-sm tablet-sm:text-base">{description}</p>
    </div>
    <img src={imgSrc} alt={imgAlt} className="mobile:h-40 object-contain tablet-sm:h-52 desktop-sm:h-60" />
  </div>
);

const SignUpCompletePage = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleBeforeChange = (current, next) => {
    setCurrentSlide(next);
  };

  return (
    <div className="landing-page flex flex-col justify-center items-center h-screen px-4 md:px-8">
      <div className="w-full max-w-5xl h-auto">
        <Slider {...settings} ref={sliderRef} beforeChange={handleBeforeChange}>
          <Slide
            title="신선한 농산물을 직접 만나요!"
            description="중간 유통과정을 생략하고, 농부와 소비자가 직접 거래하는 시스템이에요"
            imgSrc={slider1}
            imgAlt="농부와 소비자"
          />
          <Slide
            title="실시간으로 직접 협상해요!"
            description="농부와 직접 채팅하며 상품 상태와 가격을 협상할 수 있어요"
            imgSrc={slider2}
            imgAlt="직접 협상"
          />
          <Slide
            title="믿을 수 있는 판매자만!"
            description="인증을 받은 판매자만이 상품을 판매할 수 있습니다. 안전하고 신뢰할 수 있는 거래를 보장해요"
            imgSrc={slider3}
            imgAlt="판매자 인증"
          />
        </Slider>
      </div>
      <div className="flex space-x-4 mt-10 mobile:w-full tablet-sm:w-auto">
        {currentSlide === 2 ? (
          <HomeButton
            className="bg-custom-green hover:bg-custom-green-hover text-white w-full py-2 text-custom-span"
            onClick={handleGoHome}
          />
        ) : (
          <button
            className="bg-custom-green hover:bg-custom-green-hover text-white px-6 rounded-lg 
          font-semibold text-custom-span py-2 tablet:py-1.5 mobile:px-4 mobile:w-full tablet-sm:w-auto"
            onClick={handleNextSlide}
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
};

export default SignUpCompletePage;
