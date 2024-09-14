import { useState } from "react";
import useSearchPageLogics from "./hooks/useSearchPageLogics";
import DropDown from "../../components/DropDown";
import ProductBox from "../../components/ProductBox";

const SearchPage = () => {
  const { searchedItems } = useSearchPageLogics();
  // TODO: API를 통해 서버로 부터 카테고리 목록 불러오기
  const mockCategories = ["야채류", "과일류", "해조류"];
  const [currentCategory, setCurrrentCategory] = useState("");

  return (
    <>
      <div className="relative w-full p-2">
        <DropDown categories={mockCategories} setCurrrentCategory={setCurrrentCategory} />

        <span className="ml-4 font-bold">{currentCategory || "선택된 카테고리 없음"}</span>
      </div>

      <section className="px-4 py-2">
        {searchedItems.length <= 0 && "검색 결과가 없습니다."}

        {searchedItems.map((item) => (
          <ProductBox key={item.product_id} item={item} />
        ))}
      </section>
    </>
  );
};

export default SearchPage;
