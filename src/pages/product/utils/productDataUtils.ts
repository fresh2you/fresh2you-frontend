import { formatPriceInput } from "@/utils/commonUtils";

export const validateProductData = (productData: ProductDataType): boolean => {
  const { name, description, price, image, categoryId, quantity } = productData;
  const rawQuantity = quantity.replace(/,/g, "");
  return Boolean(name && description && price && categoryId && image && Number(rawQuantity) >= 1);
};

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setProductData: React.Dispatch<React.SetStateAction<ProductDataType>>,
  field: "price" | "quantity",
) => {
  const rawValue = e.target.value.replace(/[^0-9]/g, "");

  setProductData((prev) => ({
    ...prev,
    [field]: formatPriceInput(rawValue),
  }));
};

export const handleFieldChange = (
  id: keyof ProductDataType,
  value: string | number,
  setProductData: React.Dispatch<React.SetStateAction<ProductDataType>>,
) => {
  setProductData((prev) => ({ ...prev, [id]: value }));
};
