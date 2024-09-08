import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from '../utils/authUtils';

const Redirection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleTokenExchange = async () => {
      const success = await fetchToken();
      if (success) {
        navigate('/loginSuccess');
      }
    };

    handleTokenExchange();
  }, [navigate]);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
