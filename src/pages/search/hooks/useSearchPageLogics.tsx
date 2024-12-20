import { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import { searchedItemsAtom, SearchedItemsTypes } from "@/mockData/searchMockData";
import { useAtom } from "jotai";
import { api } from "@/services/api";

const useSearchPageLogics = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchDebouncedValue, setSearchDebouncedValue] = useState("");
  const [page, setPage] = useState(0);

  // 업데이트 적용 에러: 독립된 컴포넌트에 값을 공유할때 단순 hook의 useState로 공유하면 안됨
  // -> 훅 호출할때 개별 state 생성되기 때문
  // TODO: useState를 useAtom으로 교체 => 완료
  const [searchedItems, setSearchedItems] = useAtom(searchedItemsAtom);

  const searchInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // TODO: 한글입력 에러 수정 -> isComposing으로 해결 => 완료
  const searchInputOnKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchValue !== "" && !event.nativeEvent.isComposing) {
      console.log(1, searchValue, 2, searchDebouncedValue);
      // 입력 후 초기화 (선택 사항)
      setSearchValue("");
      setSearchDebouncedValue("");
      await getSearchedItems();
    } else return;
  };

  // TODO: 서버 API로 교체(명세서 나오는대로)
  // TODO: 입력완료 대기를 위해 debouce 적용 예정 => 완료
  const getSearchedItems = async () => {
    console.log(searchValue);

    const { data: response } = await api.product.getSearchedProducts({
      keyword: searchValue,
      page: page,
      size: 20,
    });

    console.log("searched", response.productList);

    setSearchedItems(response.productList);
  };

  useEffect(() => {
    const debouncer = setTimeout(() => {
      setSearchDebouncedValue(searchValue);
    }, 300); // 300ms 대기

    return () => {
      clearTimeout(debouncer);
    };
  }, [searchValue]);

  return {
    searchValue,
    searchDebouncedValue,
    searchInputOnChange,
    searchInputOnKeyDown,
    searchedItems,
    getSearchedItems,
  };
};

export default useSearchPageLogics;
