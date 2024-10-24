import { useState, useEffect } from "react";
import categoryAPI from "@/services/api/categoryAPI";

const useFetchCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchAndSetCategories = async () => {
      const response = await categoryAPI.getCategories();
      setCategories(response.data.categories);
    };

    fetchAndSetCategories();
  }, []);

  return categories;
};

export default useFetchCategories;
