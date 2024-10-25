import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailImg1 from "../../../../assets/img/detail/detail1.svg";
import DetailImg2 from "../../../../assets/img/detail/detail2.svg";
import DetailImg3 from "../../../../assets/img/detail/detail3.svg";

const ProductImageSlider = () => {
  const images = [DetailImg1, DetailImg2, DetailImg3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {images.map((ImgComponent, index) => (
          <div key={index} className="relative w-full focus:outline-none">
            <ImgComponent
              alt="농부가 밭에서 작물을 가꾸고 있는 모습"
              className="object-contain w-full h-auto max-h-96 aspect-16/9"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductImageSlider;
