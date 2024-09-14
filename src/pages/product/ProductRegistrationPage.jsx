import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/buttons/Button";
import { formatPriceInput } from "../../utils/commonUtils";
import categories from "../../data/categories";
import ProductForm from "./components/registration/ProductForm";
import ProductImages from "./components/registration/ProductImages";

const ProductRegistrationPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isValid = name && description && price && category && subCategory;
    setIsFormValid(isValid);
  }, [name, description, price, category, subCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    else {
      const rawPrice = price.replace(/,/g, "");
      // Upload image logic and submit product

      setLoading(false);
      navigate("/mypage/my-products");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen text-custom-black">
      <div className="w-2/5 py-20 flex flex-col">
        <h1 className="text-4xl font-bold mb-8 text-center text-custom-green">상품을 등록해요</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <ProductForm
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            category={category}
            setCategory={setCategory}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
            isFormValid={isFormValid}
          />
          <ProductImages
            images={images}
            setImages={setImages}
            imagePreviews={imagePreviews}
            setImagePreviews={setImagePreviews}
          />
          <div className="flex justify-center gap-4">
            <Button
              type="submit"
              className={`bg-custom-green text-white hover:bg-custom-green-hover ${
                isFormValid ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              text={loading ? "등록 중..." : "등록하기"}
              onClick={handleSubmit}
              disabled={loading || !isFormValid}
            />
            <Button
              type="button"
              className="bg-custom-gray-light text-custom-black hover:bg-custom-gray-dark"
              text="취소"
              onClick={() => navigate(-1)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductRegistrationPage;
