declare interface SubCategory {
  categoryId: number;
  categoryName: string;
}

declare interface Category {
  categoryId: number;
  categoryName: string;
  subCategories: SubCategory[];
}
