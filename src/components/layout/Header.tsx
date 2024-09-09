import logoImg from '../../assets/img/logo.png';
import IconSearch from '../../assets/icons/icon-search.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    /* TODO: 테두리 색 디자인 시스템 색상으로 변경 */
    <header className="w-full h-14 px-2 flex items-center justify-between border-b border-gray-300">
      <h1 className="w-full h-full flex items-center">
        <Link to={'/'} className="block h-3/4">
          <img src={logoImg} alt="fresh to you 로고" className="h-full max-w-full rounded-full" />
          <span className="a11y-hidden">1</span>
        </Link>
      </h1>

      <Link to={'/search'}>
        <IconSearch />
      </Link>
    </header>
  );
};

export default Header;
