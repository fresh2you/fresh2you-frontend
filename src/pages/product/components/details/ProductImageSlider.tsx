import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import detailImg1 from "../../../../assets/img/detail/detail1.png";
import detailImg2 from "../../../../assets/img/detail/detail2.png";
import detailImg3 from "../../../../assets/img/detail/detail3.png";

const ProductImageSlider = () => {
  const images = [detailImg1, detailImg2, detailImg3];

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
        {images.map((img, index) => (
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
