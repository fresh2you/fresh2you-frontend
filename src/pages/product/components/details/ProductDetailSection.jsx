import LetterIcon from "../../../../assets/icons/letter.svg";
import ProductImageSlider from "./ProductImageSlider";
import ProductDescription from "./ProductDescription";

const ProductDetailsSection = () => {
  return (
    <div className="w-full bg-yellow-100 py-4 px-6 rounded-xl shadow-sm mt-6">
      <div className="flex items-center mb-2">
        <LetterIcon alt="편지가 도착했어요" className="text-custom-green w-8 h-8" />
        <h2 className="text-xl md:text-xl font-medium text-custom-green ml-1">편지가 왔어요</h2>
      </div>
      <ProductImageSlider />
      <ProductDescription />
    </div>
  );
};

export default ProductDetailsSection;
