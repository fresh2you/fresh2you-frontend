declare interface SubCategory {
  categoryId: number;
  categoryName: string;
}

declare interface Category {
  categoryId: number;
  categoryName: string;
  subCategories: SubCategory[];
}

declare interface Address {
  isDefault?: boolean;
  recipientName: string;
  phoneNumber: string;
  deliveryAddressId: string;
  address: string;
  detailedAddress: string;
  postalCode: string;
}

declare interface ProductDataType {
  name: string;
  description: string;
  price: string;
  image: File | null;
  imagePreview?: string;
  categoryId: number;
  quantity: string;
}

declare interface PurchaseFormDataType {
  recipientName: string;
  phoneNumber: string;
  addressId: number;
  address: string;
  detailedAddress: string;
  postalCode: string;
}
