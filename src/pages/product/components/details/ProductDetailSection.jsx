import LetterIcon from "../../../../assets/icons/letter.svg";
import ProductImageSlider from "./ProductImageSlider";
import ProductDescription from "./ProductDescription";

const ProductDetailsSection = ({ description }) => {
  return (
    <div
      className="w-full bg-yellow-100 py-4 px-6 rounded-xl shadow-sm mt-3.5 mobile:min-h-[350px]
    tablet:min-h-[400px] desktop-sm:min-h-[450px]"
    >
      <div className="flex items-center mb-2">
        <LetterIcon alt="편지가 도착했어요" className="text-custom-green w-8 h-8" />
        <h2 className="text-custom-p font-medium text-custom-green ml-1">편지가 왔어요</h2>
      </div>
      <ProductImageSlider />
      <ProductDescription description={description} />
    </div>
  );
};

export default ProductDetailsSection;
