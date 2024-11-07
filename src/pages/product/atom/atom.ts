import { atom } from "jotai";
import { validateProductData } from "../utils/productDataUtils";

export const productsAtom = atom<IProductList[]>([]);
export const pageNumberAtom = atom<number>(0);
export const hasMoreAtom = atom<boolean>(true);
export const selectedCategoryIdAtom = atom<number | undefined>(undefined);
export const productDataAtom = atom<ProductDataType>({
  name: "",
  description: "",
  price: "",
  image: null,
  imagePreview: "",
  categoryId: 0,
  quantity: "",
});
export const isFormValidAtom = atom((get) => validateProductData(get(productDataAtom)));
export const quantityAtom = atom<number>(1);
export const recipientDetailsAtom = atom<PurchaseFormDataType>({
  recipientName: "",
  phoneNumber: "",
  addressId: 0,
  address: "",
  detailedAddress: "",
  postalCode: "",
});
export const addressListAtom = atom<Address[]>([]);
