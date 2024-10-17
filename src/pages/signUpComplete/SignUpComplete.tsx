import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/img/sliders/slider1.png";
import slider2 from "../../assets/img/sliders/slider2.png";
import slider3 from "../../assets/img/sliders/slider3.png";
import { useRef, useState } from "react";
import Slide from "./component/Slide";
import SliderControls from "./component/SliderControls";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
};

const SignUpCompletePage = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePreviousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleBeforeChange = (_current: number, next: number) => {
    setCurrentSlide(next);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4 mobile:w-full mobile:max-w-[420px] mx-auto tablet-sm:w-11/12 tablet-sm:max-w-[650px] desktop-sm:max-w-[800px]">
      <main className="w-full h-auto">
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
      </main>
      <SliderControls
        currentSlide={currentSlide}
        onNextSlide={handleNextSlide}
        onPreviousSlide={handlePreviousSlide}
        totalSlides={totalSlides}
      />
    </div>
  );
};

export default SignUpCompletePage;
