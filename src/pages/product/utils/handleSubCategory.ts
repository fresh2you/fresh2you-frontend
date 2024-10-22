import { NavigateFunction } from "react-router-dom";

export const handleSubCategory = (subCategory: number, navigate: NavigateFunction) => {
  navigate(`/page/${subCategory}`);
};
