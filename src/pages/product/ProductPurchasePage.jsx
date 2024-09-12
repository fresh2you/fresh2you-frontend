import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from './components/buttons/Button';
import ProductMiniInfo from './components/purchase/ProductMiniInfo';
import PurchaseForm from './components/purchase/PurchaseForm';
import { mockProducts } from '../../mockdata/MockData';
import { formatCurrency } from '../../utils/commonUtils';
import logoImg from '../../assets/img/logo.png';
const ProductPurchasePage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipientDetails, setRecipientDetails] = useState({
    recipientName: '',
    phoneNumber: '',
    address: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      // 상품 정보 가져오는 API
    };

    fetchProduct();
    setProduct(mockProducts.products[0]);
  }, [productId]);

  const handlePurchase = async () => {
    const { recipientName, phoneNumber, address } = recipientDetails;

    if (!recipientName || !phoneNumber || !address) {
      alert('모든 필드를 입력해 주세요.');
      return;
    }

    const purchaseData = {
      productId,
      quantity,
      recipientName,
      phoneNumber,
      address,
    };

    setLoading(true);
    try {
      // payment API call

      navigate('../complete');
    } catch (err) {
      setError('구매 처리 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        {loadingoading ? <img src={logoImg} alt="Fresh 2 You" className="animate-bounce rounded-md w-32" /> : null}
      </div>
    );
  if (error) return <div>{error}</div>;
  if (!product) return <div>상품 정보를 불러올 수 없습니다.</div>;

  const totalAmount = product.price * quantity;

  return (
    <div className="flex flex-col items-center min-h-screen text-custom-black px-4 md:px-8 lg:px-20">
      <div className="w-full max-w-4xl py-20 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-custom-green">구매를 진행해볼까요?</h1>
        <div className="w-full max-w-4xl flex flex-col items-center">
          <ProductMiniInfo product={product} quantity={quantity} setQuantity={setQuantity} />
          <PurchaseForm recipientDetails={recipientDetails} setRecipientDetails={setRecipientDetails} error={error} />
        </div>

        <div className="text-2xl font-semibold mt-4">총금액: {formatCurrency(totalAmount)} 원</div>
        <div className="flex justify-center gap-4 mt-6">
          <Button
            type="button"
            className="bg-custom-green text-white hover:bg-custom-green-hover"
            text={loading ? '구매 중...' : '결제하기'}
            onClick={handlePurchase}
            disabled={loading}
          />
          <Button
            type="button"
            className="bg-custom-gray-light text-custom-black hover:bg-custom-gray-dark"
            text="취소"
            onClick={() => navigate(-1)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPurchasePage;
