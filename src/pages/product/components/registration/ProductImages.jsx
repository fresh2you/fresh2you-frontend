import ImageUpload from './ImageUpload';

const ProductImages = ({ images, setImages, imagePreviews, setImagePreviews }) => {
  const handleImageChange = (selectedFiles) => {
    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));

    setImages((prevImages) => [...prevImages, ...selectedFiles]);
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleDeleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setImagePreviews(imagePreviews.filter((_, i) => i !== index));
  };

  return (
    <ImageUpload onImageChange={handleImageChange} imagePreviews={imagePreviews} onDeleteImage={handleDeleteImage} />
  );
};

export default ProductImages;
