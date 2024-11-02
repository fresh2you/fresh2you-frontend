import useDragAndDrop from "../../hooks/useDragAndDrop";
import fileHandlers from "../../utils/fileHandlers";
import { useRef } from "react";
import ImageInput from "./ImageInput";
import ProductImagePreview from "./ProductImagePreview";
import "../../../../styles/styles.css";
import { inputUtils } from "@/utils/commonUtils";
import UploadPrompt from "./UploadPrompt";
import { productDataAtom } from "../../atom/atom";
import { useAtom } from "jotai";

const ProductImage: React.FC = () => {
  const [productData, setProductData] = useAtom(productDataAtom);
  const { fileName, setFileName, isDragOver, setIsDragOver } = useDragAndDrop();
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <section className="flex flex-col mb-2.5">
      <ImageInput
        id="image"
        label="상품 이미지"
        setProductData={setProductData}
        setFileName={setFileName}
        fileInputRef={fileInputRef}
      />
      <div
        role="button"
        className={`cursor-pointer rounded h-48 p-4 w-full border-2 border-dashed border-custom-green 
          flex justify-center custom-focus-light ${isDragOver ? "bg-custom-green-200" : "bg-gray-200"}`}
        onDragOver={(e) => fileHandlers.handleDragOver(e, setIsDragOver)}
        onDragLeave={() => fileHandlers.handleDragLeave(setIsDragOver)}
        onDrop={(e) => fileHandlers.handleDrop(e, setFileName, setProductData, setIsDragOver)}
        onClick={() => fileHandlers.handleFileInputClick(fileInputRef)}
        tabIndex={0}
        onKeyDown={(e) => inputUtils.handleKeyDown(e, () => fileHandlers.handleFileInputClick(fileInputRef))}
      >
        {productData.imagePreview ? (
          <ProductImagePreview imagePreview={productData.imagePreview} fileName={fileName} />
        ) : (
          <UploadPrompt isDragOver={isDragOver} />
        )}
      </div>
    </section>
  );
};

export default ProductImage;
