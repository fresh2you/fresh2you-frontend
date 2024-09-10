import logoImg from '../../assets/img/logo.png';
import IconSearch from '../../assets/icons/icon-search.svg';
import { Link, useLocation } from 'react-router-dom';
import HeaderInput from './components/HeaderInput';

const Header = () => {
  const { pathname } = useLocation();

  return (
    /* TODO: 테두리 색 디자인 시스템 색상으로 변경 */
    <header className="w-full h-14 px-2 py-2 flex items-center justify-between border-b border-gray-300">
      <h1 className="w-auto h-full flex items-center">
        <Link to={'/'} className="block h-full">
          {/* TODO: 가독성으로 인해 로고는 상단바용 로고 별도 제작하기 (텍스트 로고) */}
          <img src={logoImg} alt="fresh to you 로고" className="h-full max-w-full rounded-full" />
          <span className="a11y-hidden">1</span>
        </Link>
      </h1>

      {pathname === '/search' && <HeaderInput />}

      <Link to={'/search'}>
        <IconSearch />
      </Link>
    </header>
  );
};

export default Header;
