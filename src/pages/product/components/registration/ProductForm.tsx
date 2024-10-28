import Textarea from "./Textarea";
import DropdownSelect from "./DropDownSelect";
import useFetchCategories from "../../hooks/useFetchCategories";
import { handleInputChange } from "../../utils/productDataUtils";
import InputWithLabel from "@/components/InputWithLabel";
import { handleFieldChange } from "../../utils/productDataUtils";

interface ProductFormProps {
  productData: ProductDataType;
  setProductData: React.Dispatch<React.SetStateAction<ProductDataType>>;
}

const ProductForm: React.FC<ProductFormProps> = ({ productData, setProductData }) => {
  const { categories } = useFetchCategories();

  const fields: { id: keyof ProductDataType; label: string; maxLength?: number; showLength?: boolean }[] = [
    { id: "name", label: "상품명", maxLength: 15, showLength: true },
    { id: "price", label: "가격" },
    { id: "quantity", label: "수량" },
  ];

  return (
    <>
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
    </>
  );
};

export default ProductForm;
