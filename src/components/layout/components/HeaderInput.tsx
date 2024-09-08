import useSearchPageLogics from '../../../pages/search/hooks/useSearchPageLogics';

const HeaderInput = () => {
  const { searchValue, searchInputOnChange, searchInputOnKeyDown } = useSearchPageLogics();

  return (
    <input
      className="bg-gray-600 w-4/5 h-full px-4 py-2 rounded-lg text-white placeholder:text-white"
      value={searchValue}
      placeholder="검색할 상품명을 입력하고 엔터키를 입력해주세요"
      onChange={searchInputOnChange}
      onKeyDown={searchInputOnKeyDown}
    />
  );
};

export default HeaderInput;
