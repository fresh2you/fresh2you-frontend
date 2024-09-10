import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/img/logo.png';
import HomeButton from '../components/HomeButton';
const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-custom-green text-center">
      <div className="flex items-center justify-center">
        <img src={logoImg} alt="Fresh 2 You" className="rounded-lg mr-10" />
        <div className="flex flex-col items-start">
          <h1 className="text-7xl font-bold mb-4 text-custom-white">404</h1>
          <p className="text-2xl mb-8 font-medium">페이지를 찾을 수 없습니다.</p>
        </div>
      </div>
      <HomeButton className="bg-custom-white text-custom-black hover:bg-custom-green-hover transition hover:text-custom-white" />
    </div>
  );
};

export default NotFoundPage;
