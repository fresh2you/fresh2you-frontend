import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import detailImg1 from '../../../../assets/img/detail/detail1.png';
import detailImg2 from '../../../../assets/img/detail/detail2.png';
import detailImg3 from '../../../../assets/img/detail/detail3.png';

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
    <div className="w-full relative">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative w-full">
            <img
              src={img}
              alt={`Product ${index + 1}`}
              className="w-full h-auto max-h-96 object-contain"
              style={{ aspectRatio: '16/9' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductImageSlider;
