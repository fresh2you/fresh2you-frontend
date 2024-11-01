import fileHandlers from "../../utils/fileHandlers";
import { useSetAtom } from "jotai";
import { productDataAtom } from "../../atom/atom";
import BinIcon from "../../../../assets/icons/bin.svg";

interface ProductImagePreviewProps {
  imagePreview: string;
  fileName: string;
}

const ProductImagePreview: React.FC<ProductImagePreviewProps> = ({ imagePreview, fileName }) => {
  const setProductData = useSetAtom(productDataAtom);
  return (
    <div className="flex items-end w-full h-full gap-1" aria-label="미리보기 이미지">
      <img src={imagePreview} alt={`${fileName} - 미리보기 이미지`} className="h-full rounded" loading="lazy" />
      <button
        onClick={(e) => {
          fileHandlers.handleCloseClick(e, setProductData);
        }}
        aria-label="이미지 파일 삭제"
        className="p-1 text-white rounded-full bg-custom-gray-dark hover:text-custom-gray-light"
      >
        <BinIcon alt="이미지 파일 삭제" role="img" />
      </button>
    </div>
  );
};

export default ProductImagePreview;
