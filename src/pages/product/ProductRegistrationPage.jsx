import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/buttons/Button";
import { formatPriceInput } from "../../utils/commonUtils";
import ProductForm from "./components/registration/ProductForm";
import ProductImages from "./components/registration/ProductImages";
import { registerProduct } from "./api/productApis";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [selectedCatId, setSelectedCatId] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const isValid = name && description && price && selectedCatId && images.length > 0;
    setIsFormValid(isValid);
  }, [name, description, price, selectedCatId, images]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      toast.error("모든 필드를 입력해주세요.");
      return;
    }

    const rawPrice = price.replace(/,/g, "");
    setLoading(true);

    try {
      const productData = {
        name: name,
        description: description,
        price: rawPrice,
        categoryId: selectedCatId,
        quantity: 1,
      };
      await registerProduct(productData, images[0]);
      navigate("/mypage/my-products");
    } catch (error) {
      toast.error("상품 등록에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen text-custom-black pt-2 w-full">
      <div className="flex flex-col mobile:w-full tablet-sm:w-3/5 tablet-sm:min-w-[447px] tablet-sm:max-w-[540px]">
        <h1 className="text-custom-h2 font-bold text-center text-custom-green mb-8">상품을 등록해요</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <ProductForm
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            category={category}
            setCategory={setCategory}
            isFormValid={isFormValid}
            setSelectedCatId={setSelectedCatId}
          />
          <ProductImages
            images={images}
            setImages={setImages}
            imagePreviews={imagePreviews}
            setImagePreviews={setImagePreviews}
          />
          <div className="flex justify-center gap-2">
            <Button
              type="submit"
              className={`bg-custom-green text-white hover:bg-custom-green-hover ${
                isFormValid ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              text={"등록하기"}
              onClick={handleSubmit}
              disabled={loading || !isFormValid}
            />
            <Button
              type="button"
              className="bg-custom-gray-light text-custom-black hover:bg-custom-gray-dark"
              text="취소"
              onClick={(e) => {
                e.preventDefault();
                navigate("/mypage/my-products");
              }}
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductRegistrationPage;
