import LetterIcon from '../../../../assets/icons/letter.svg';
import ProductImageSlider from './ProductImageSlider';
import ProductDescription from './ProductDescription';

const ProductDetailsSection = () => {
  return (
    <div className="w-full mt-4 bg-yellow-100 py-4 px-4 md:px-6 rounded-xl shadow-sm">
      <div className="flex items-center mb-2">
        <LetterIcon alt="편지가 도착했어요" className="text-custom-green" />
        <h2 className="text-xl md:text-2xl font-medium text-custom-green ml-2">편지가 왔어요</h2>
      </div>
      <ProductImageSlider />
      <ProductDescription />
    </div>
  );
};

export default ProductDetailsSection;
