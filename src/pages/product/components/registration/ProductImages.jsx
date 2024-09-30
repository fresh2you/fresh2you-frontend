import ImageUpload from "./ImageUpload";

const ProductImages = ({ productData, setProductData }) => {
  const handleImageChange = (selectedFiles) => {
    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
    setProductData((prev) => ({
      ...prev,
      images: [...prev.images, ...selectedFiles],
      imagePreviews: [...prev.imagePreviews, ...newPreviews],
    }));
  };

  const handleDeleteImage = (index) => {
    setProductData((prev) => {
      const updatedImages = prev.images.filter((_, i) => i !== index);
      const updatedPreviews = prev.imagePreviews.filter((_, i) => i !== index);

      return {
        ...prev,
        images: updatedImages,
        imagePreviews: updatedPreviews,
      };
    });
  };

  return (
    <ImageUpload
      productData={productData}
      setProductData={setProductData}
      onImageChange={handleImageChange}
      onDeleteImage={handleDeleteImage}
    />
  );
};

export default ProductImages;
