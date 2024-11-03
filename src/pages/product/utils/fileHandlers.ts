const fileHandlers = {
  handleImageChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    setFileName: React.Dispatch<React.SetStateAction<string>>,
    setProductData: React.Dispatch<React.SetStateAction<ProductDataType>>,
  ) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const preview = URL.createObjectURL(selectedFile);
      setProductData((prev) => ({
        ...prev,
        image: selectedFile,
        imagePreview: preview,
      }));
      setFileName(selectedFile.name);
    } else {
      setProductData((prev) => ({
        ...prev,
        image: null,
        imagePreview: "",
      }));
      setFileName("");
    }
  },

  handleFileInputClick: (fileInputRef: React.RefObject<HTMLInputElement>) => {
    fileInputRef.current?.click();
  },

  handleDeleteImage: (setProductData: React.Dispatch<React.SetStateAction<ProductDataType>>) => {
    setProductData((prev) => ({
      ...prev,
      images: null,
      imagePreview: "",
    }));
  },

  handleDragOver: (
    e: React.DragEvent<HTMLDivElement>,
    setIsDragOver: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    e.preventDefault();
    setIsDragOver(true);
  },

  handleDragLeave: (setIsDragOver: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsDragOver(false);
  },

  handleDrop: (
    e: React.DragEvent<HTMLDivElement>,
    setFileName: React.Dispatch<React.SetStateAction<string>>,
    setProductData: React.Dispatch<React.SetStateAction<ProductDataType>>,
    setIsDragOver: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setFileName(file.name);
      setProductData((prev) => ({
        ...prev,
        image: file,
        imagePreview: preview,
      }));
    }
    setIsDragOver(false);
  },

  handleCloseClick: (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
    setProductData: React.Dispatch<React.SetStateAction<ProductDataType>>,
  ) => {
    if (e) {
      e.stopPropagation();
      fileHandlers.handleDeleteImage(setProductData);
    }
  },
};
export default fileHandlers;
