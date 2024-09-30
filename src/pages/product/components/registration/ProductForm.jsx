import TextInput from "./TextInput";
import Textarea from "./Textarea";
import DropdownSelect from "./DropDownSelect";
import useFetchCategories from "../../hooks/useFetchCategories";
import { formatPriceInput } from "../../../../utils/commonUtils";

const ProductForm = ({ productData, setProductData, setSelectedCatId }) => {
  const categories = useFetchCategories();
  const mainCategories = categories.map((cat) => cat.categoryName);
  const mainCategoryIds = categories.map((cat) => cat.categoryId);
  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setProductData((prev) => ({ ...prev, category: newCategory }));

    const selectedIndex = mainCategories.indexOf(newCategory);
    if (selectedIndex !== -1) {
      setSelectedCatId(mainCategoryIds[selectedIndex]);
    }
  };
  const handlePriceChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, "");
    setProductData((prev) => ({ ...prev, price: formatPriceInput(rawValue) }));
  };

  return (
    <>
      <TextInput
        id="name"
        label="상품명"
        value={productData.name}
        onChange={(e) => setProductData((prev) => ({ ...prev, name: e.target.value }))}
        maxLength={15}
        showLength={true}
      />
      <Textarea
        id="description"
        label="상품 설명"
        value={productData.description}
        onChange={(e) => setProductData((prev) => ({ ...prev, description: e.target.value }))}
        maxLength={500}
      />
      <TextInput id="price" label="가격" value={productData.price} onChange={handlePriceChange} showLength={false} />
      <DropdownSelect
        id="category"
        label="카테고리"
        options={mainCategories}
        value={productData.category}
        onChange={handleCategoryChange}
        required
      />
    </>
  );
};

export default ProductForm;
