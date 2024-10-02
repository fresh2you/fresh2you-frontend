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
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    images: [],
    imagePreviews: [],
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedCatId, setSelectedCatId] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const { name, description, price, images } = productData;
    const isValid = name && description && price && selectedCatId && images.length > 0;
    setIsFormValid(isValid);
  }, [productData]);

  const handleInputChange = (field, value) => {
    setProductData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      toast.error("모든 필드를 입력해주세요.");
      return;
    }

    const rawPrice = productData.price.replace(/,/g, "");
    setLoading(true);

    try {
      const productPayload = {
        name: productData.name,
        price: rawPrice,
        description: productData.description,
        categoryId: selectedCatId,
        quantity: 1,
      };
      const response = await registerProduct(productPayload, productData.images[0]);
      navigate(`/product/${response.data.id}`);
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
          <ProductForm productData={productData} setProductData={setProductData} setSelectedCatId={setSelectedCatId} />
          <ProductImages productData={productData} setProductData={setProductData} />
          <div className="flex justify-center gap-2">
            <Button
              type="submit"
              className={`bg-custom-green text-white hover:bg-custom-green-hover ${
                isFormValid ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              text={"등록하기"}
              disabled={loading || !isFormValid}
            />
            <Button
              type="button"
              className="bg-custom-gray-light text-custom-black hover:bg-custom-gray-dark"
              text="취소"
              onClick={(e) => {
                e.preventDefault();
                navigate("/mypage");
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
