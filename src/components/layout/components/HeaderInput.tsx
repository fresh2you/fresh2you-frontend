import useSearchPageLogics from '../../../pages/search/hooks/useSearchPageLogics';

const HeaderInput = () => {
  const { searchValue, searchInputOnChange, searchInputOnKeyDown } = useSearchPageLogics();

  return (
    <input
      className="w-3/4 h-full px-2 py-2 border border-gray-300 outline-none rounded-lg text-xs text-black placeholder:text-gray-300"
      value={searchValue}
      placeholder="검색할 상품명을 입력하고 엔터키를 입력해주세요"
      onChange={searchInputOnChange}
      onKeyDown={searchInputOnKeyDown}
    />
  );
};

export default HeaderInput;
