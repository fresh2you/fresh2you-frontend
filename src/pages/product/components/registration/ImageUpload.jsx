import { CloseBtn } from '../../../signUp/component/buttons/CloseBtn';

const ImageUpload = ({ onImageChange, imagePreviews, onDeleteImage }) => {
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length + imagePreviews.length > 5) {
      alert('최대 5장의 이미지만 업로드할 수 있습니다.');
      return;
    }

    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));

    onImageChange(selectedFiles);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="images" className="text-lg font-semibold">
        상품 이미지
      </label>
      <input
        id="images"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        multiple
        className="border p-2 rounded"
      />
      <div className="flex flex-wrap gap-4 mt-4">
        {imagePreviews.map((preview, index) => (
          <div key={index} className="relative">
            <img src={preview} alt={`상품 이미지 미리보기 ${index}`} className="w-56 h-56 rounded object-cover" />
            <button
              type="button"
              onClick={() => onDeleteImage(index)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full w-6 h-6 flex justify-center items-center hover:border-transparent focus:outline-none"
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
