import Textarea from "./Textarea";
import DropdownSelect from "./DropDownSelect";
import useFetchCategories from "../../hooks/useFetchCategories";
import { handleInputChange } from "../../utils/productDataUtils";
import InputWithLabel from "@/components/InputWithLabel";
import { handleFieldChange } from "../../utils/productDataUtils";
import handleRegistrationSubmit from "../../utils/handleRegistrationSubmit";
import ProductImage from "./ProductImage";
import TwoActionBtns from "../buttons/TwoActionBtns";
import { productDataAtom, isFormValidAtom } from "../../atom/atom";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useProductRegistration from "../../hooks/useProductRegistration";

const ProductForm: React.FC = () => {
  const [productData, setProductData] = useAtom(productDataAtom);
  const [isFormValid] = useAtom(isFormValidAtom);
  const { categories } = useFetchCategories();
  const navigate = useNavigate();
  const { mutateAsync: registerProduct } = useProductRegistration((productId) => {
    navigate(`/product/${productId}`);
  });

  const fields: { id: keyof ProductDataType; label: string; maxLength?: number; showLength?: boolean }[] = [
    { id: "name", label: "상품명", maxLength: 15, showLength: true },
    { id: "price", label: "가격" },
    { id: "quantity", label: "수량" },
  ];

  return (
    <form
      onSubmit={(e) => handleRegistrationSubmit(e, isFormValid, productData, registerProduct)}
      className="flex flex-col gap-1"
      aria-label="상품 등록 폼"
      role="form"
    >
      {fields.map((field) => (
        <InputWithLabel
          key={field.id}
          id={field.id}
          label={field.label}
          value={productData[field.id] as string}
          onChange={(e) =>
            field.id === "price" || field.id === "quantity"
              ? handleInputChange(e, setProductData, field.id)
              : handleFieldChange(field.id, e.target.value, setProductData)
          }
          maxLength={field.maxLength}
          showLength={field.showLength}
        />
      ))}
      <Textarea
        id="description"
        label="상품 설명"
        value={productData.description}
        onChange={(e) => handleFieldChange("description", e.target.value, setProductData)}
        maxLength={500}
      />
      <DropdownSelect
        id="category"
        label="카테고리"
        options={categories}
        value={productData.categoryId}
        onChange={(e) => handleFieldChange("categoryId", Number(e.target.value), setProductData)}
      />
      <ProductImage />
      <TwoActionBtns
        primaryText="등록하기"
        secondaryText="취소 "
        secondaryOnClick={(e) => {
          e.preventDefault();
          navigate("/mypage");
        }}
      />
      <ToastContainer />
    </form>
  );
};

export default ProductForm;
