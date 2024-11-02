import { CloseBtn } from "@/components/CloseBtn";
import fileHandlers from "../../utils/fileHandlers";
import { useSetAtom } from "jotai";
import { productDataAtom } from "../../atom/atom";

interface ProductImagePreviewProps {
  imagePreview: string;
  fileName: string;
}

const ProductImagePreview: React.FC<ProductImagePreviewProps> = ({ imagePreview, fileName }) => {
  const setProductData = useSetAtom(productDataAtom);
  return (
    <div className="w-11/12 h-4/5" aria-label="미리보기 이미지">
      <img
        src={imagePreview}
        alt={`${fileName} - 미리보기 이미지`}
        className="rounded object-fit h-full"
        loading="lazy"
      />
      <div className="flex items-center mt-2 gap-1">
        <span className="inline-block text-custom-black font-semibold text-custom-span">{fileName}</span>
        <CloseBtn
          onClick={(e) => {
            fileHandlers.handleCloseClick(e, setProductData);
          }}
          className="bg-red-500 rounded-full w-6 h-6 p-0 pb-0.5 flex justify-center items-center top-1 right-3"
          aria-label="이미지 파일 삭제"
        />
      </div>
    </div>
  );
};

export default ProductImagePreview;
