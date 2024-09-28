import { useEffect } from "react";
import { fetchProductById } from "../api/productApi";
export const useFetchProductById = (id, setLoading, setProduct) => {
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const fetchedProduct = await fetchProductById(id);
        setProduct(fetchedProduct);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);
};
