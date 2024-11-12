import LetterIcon from "../../../../assets/icons/letter.svg";
import ProductImageSlider from "./ProductImageSlider";
import ProductDescription from "./ProductDescription";

const ProductDetailsSection = ({ description }: { description: string }) => {
  return (
    <div
      className="w-full bg-yellow-100 py-4 px-6 rounded-xl shadow-sm mt-3.5 mobile:min-h-[350px]
    tablet:min-h-[400px] desktop-sm:min-h-[450px]"
    >
      <div className="flex items-center mb-2">
        <LetterIcon alt="편지가 도착했어요" className="w-8 h-8 text-custom-green" />
        <h2 className="ml-1 font-medium text-custom-p text-custom-green">편지가 왔어요</h2>
      </div>
      <ProductImageSlider />
      <ProductDescription description={description} />
    </div>
  );
};

export default ProductDetailsSection;
