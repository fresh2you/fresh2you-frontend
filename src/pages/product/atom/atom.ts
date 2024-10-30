import { atom } from "jotai";

export const productsAtom = atom<IProductList[]>([]);
export const pageNumberAtom = atom<number>(0);
export const hasMoreAtom = atom<boolean>(true);
export const selectedCategoryIdAtom = atom<number | undefined>(undefined);
