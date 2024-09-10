import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import axios from 'axios';
import { recommendedProducts } from '../../mockdata/homeMockData';
import HomeButton from '../../components/HomeButton';
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  console.log(recommendedProducts);
  useEffect(() => {
    // const fetchProducts = async () => {
    //   try {
    //     const response = await axios.get('/api/products'); // 백엔드에서 상품 데이터를 가져옴
    //     setProducts(response.data);
    //   } catch (error) {
    //     console.error('상품 데이터를 불러오지 못했습니다:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchProducts();
  }, []);

  // if (loading) {
  //   return <div className="text-center mt-20">상품 목록을 불러오는 중입니다...</div>;
  // }
  const productList = recommendedProducts.products;
  if (productList.length === 0) {
    return <div className="text-center mt-20">등록된 상품이 없습니다.</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">전체 상품 목록</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productList.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
