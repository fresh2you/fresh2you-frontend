import IconSearch from "@/assets/icons/icon-search.svg";
import useSearchPageLogics from "@/pages/search/hooks/useSearchPageLogics";

const HeaderInput = () => {
  const { searchValue, searchInputOnChange, searchInputOnKeyDown } = useSearchPageLogics();

  return (
    <div className="flex items-center w-full max-w-xl gap-1 px-1 border border-gray-300 rounded-lg h-4/5 tablet-sm:px-2 tablet-sm:gap-2 tablet:gap-4">
      <IconSearch className="h-2/3 aspect-square text-custom-gray-dark" />

      <div className="separator bg-custom-gray-light" />

      <input
        className="inline-flex items-center w-full h-full py-2 text-base text-black outline-none placeholder:text-gray-300 mobile:placeholder:text-xs tablet-sm:placeholder:text-sm"
        value={searchValue}
        placeholder="검색어를 입력해 주세요. "
        onChange={searchInputOnChange}
        onKeyDown={searchInputOnKeyDown}
      />
    </div>
  );
};

export default HeaderInput;
