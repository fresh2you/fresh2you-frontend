import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../../assets/img/sliders/slider1.png';
import slider2 from '../../assets/img/sliders/slider2.png';
import slider3 from '../../assets/img/sliders/slider3.png';
import HomeButton from '../../components/HomeButton';
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
};

const Slide = ({ title, description, imgSrc, imgAlt }) => (
  <div className="slide flex flex-col md:flex-row justify-center items-center md:items-start p-4">
    <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0 mr-4">
      <h1 className="text-2xl md:text-5xl font-bold text-custom-green mt-12">{title}</h1>
      <p className="mt-2 text-base md:text-xl">{description}</p>
    </div>
    <img src={imgSrc} alt={imgAlt} className="w-full max-w-[360px] max-h-[360px] object-cover" />
  </div>
);

const SignUpCompletePage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="landing-page flex flex-col justify-center items-center h-screen px-4 md:px-8">
      <div className="w-full max-w-5xl h-auto">
        <Slider {...settings}>
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
      <HomeButton className="mt-12 bg-custom-green text-custom-white hover:bg-custom-green-hover text-white" />
    </div>
  );
};

export default SignUpCompletePage;
