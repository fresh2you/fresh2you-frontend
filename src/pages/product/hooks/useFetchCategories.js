import { useState, useEffect } from "react";
import { getCategories } from "../utils/productUtils";

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAndSetCategories = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };

    fetchAndSetCategories();
  }, []);

  return categories;
};

export default useFetchCategories;
