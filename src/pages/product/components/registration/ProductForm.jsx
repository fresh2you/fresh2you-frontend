import TextInput from "./TextInput";
import Textarea from "./Textarea";
import DropdownSelect from "./DropDownSelect";
import useFetchCategories from "../../hooks/useFetchCategories";
import { formatPriceInput } from "../../../../utils/commonUtils";
const categories = useFetchCategories;
const ProductForm = ({
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
  category,
  setCategory,
  subCategory,
  setSubCategory,
  isFormValid,
}) => {
  const mainCategories = Object.keys(categories);
  const subCategories = category ? categories[category] : [];

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    setSubCategory("");
  };
  const handlePriceChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, "");
    setPrice(formatPriceInput(rawValue));
  };

  return (
    <>
      <TextInput
        id="name"
        label="상품명"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={15}
        className="border px-2 py-2 rounded outline-none w-60"
        showLength={true}
      />
      <Textarea
        id="description"
        label="상품 설명"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={1000}
        className="border p-2 rounded outline-none"
      />
      <TextInput
        id="price"
        label="가격"
        value={price}
        onChange={handlePriceChange}
        className="border p-2 rounded outline-none w-60"
        showLength={false}
      />
      <DropdownSelect
        id="category"
        label="카테고리"
        options={mainCategories}
        value={category}
        onChange={handleCategoryChange}
        required
      />
      {category && (
        <DropdownSelect
          id="subCategory"
          label="하위 카테고리"
          options={subCategories}
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          required
        />
      )}
    </>
  );
};

export default ProductForm;
