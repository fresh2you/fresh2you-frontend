import IconSearch from '../../assets/icons/icon-search.svg';
import { Link, useLocation } from 'react-router-dom';
import HeaderInput from './components/HeaderInput';

const Header = () => {
  const { pathname } = useLocation();

  return (
    /* TODO: 테두리 색 디자인 시스템 색상으로 변경 */
    <header className="w-full h-14 px-2 flex items-center justify-between border-b border-gray-300">
      <h1 className="w-full h-full flex items-center">
        <Link to={'/'} className="block h-3/4">
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
