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
