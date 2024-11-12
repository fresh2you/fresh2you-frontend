import UploadIcon from "../../../../assets/icons/icon-upload.svg";

interface UploadPromptProps {
  isDragOver: boolean;
}

const UploadPrompt: React.FC<UploadPromptProps> = ({ isDragOver }) => {
  return (
    <div className="w-11/12 flex items-center justify-center gap-1.5" role="alert">
      <UploadIcon
        alt="이미지를 업로드 해주세요"
        className={`w-1/3 aspect-square max-w-20 ${isDragOver ? "text-custom-green-700" : "text-gray-500"}`}
      />
      <span className={`text-custom-sm-p ${isDragOver ? "text-custom-green-700" : "text-gray-500"}`}>
        업로드할 이미지를 드래그하거나 클릭하여 선택하세요.
      </span>
    </div>
  );
};

export default UploadPrompt;
