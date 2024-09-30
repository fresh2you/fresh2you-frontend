import "../../.././../styles/styles.css";
import { toast } from "react-toastify";
const ImageUpload = ({ productData, setProductData, onImageChange, onDeleteImage }) => {
  const imagePreviews = productData.imagePreviews;

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length + imagePreviews.length > 1) {
      toast.error("최대 1장의 이미지만 업로드할 수 있습니다.");
      return;
    }

    onImageChange(selectedFiles);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="images" className="text-custom-p font-semibold">
        상품 이미지
      </label>
      <input
        id="images"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        multiple
        className="border p-2 rounded custom-focus"
      />
      <div className="flex flex-wrap gap-4 mt-4">
        {productData.imagePreviews.map((preview, index) => (
          <div key={index} className="relative w-1/3">
            <img src={preview} alt={`상품 이미지 미리보기 ${index}`} className="rounded object-cover" />
            <button
              type="button"
              onClick={() => onDeleteImage(index)}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 pb-1.5 rounded-full w-6 h-6 flex justify-center 
              items-center custom-focus hover:text-custom-gray-light"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
