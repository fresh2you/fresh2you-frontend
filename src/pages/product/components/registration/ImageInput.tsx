import fileHandlers from "../../utils/fileHandlers";

interface ImageInputProps {
  id: string;
  label: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  setProductData: React.Dispatch<React.SetStateAction<ProductDataType>>;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const ImageInput: React.FC<ImageInputProps> = ({ id, label, setFileName, setProductData, fileInputRef }) => {
  return (
    <div className="flex flex-col w-full mb-1">
      <label htmlFor={id} className="text-custom-input font-semibold">
        {label}
      </label>
      <input
        ref={fileInputRef}
        id={id}
        type="file"
        accept="image/*"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          fileHandlers.handleImageChange(e, setFileName, setProductData)
        }
        className="hidden"
        required
        aria-required="true"
        aria-labelledby={`label-${id}`}
      />
    </div>
  );
};

export default ImageInput;
