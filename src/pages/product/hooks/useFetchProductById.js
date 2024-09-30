import { useEffect } from "react";
import { fetchProductById } from "../api/productApis";
export const useFetchProductById = (id, setLoading, setProduct) => {
  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
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
