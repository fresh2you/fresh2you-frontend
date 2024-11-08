//import { useState } from "react";
import useSearchPageLogics from "./hooks/useSearchPageLogics";
//import DropDown from "../../components/DropDown";
import WideProductBox from "@/components/WideProductBox";

const SearchPage = () => {
  const { searchedItems } = useSearchPageLogics();

  return (
    <div className="flex flex-col w-full h-full">
      {/* <div className="relative w-full p-2">
        <DropDown categories={mockCategories} setCurrrentCategory={setCurrrentCategory} />

        <span className="ml-4 font-bold">{currentCategory || "선택된 카테고리 없음"}</span>
      </div> */}

      <section className="px-4 py-2">
        {searchedItems.length <= 0 && "검색 결과가 없습니다."}

        {searchedItems.map((item) => (
          <WideProductBox key={item.productId} item={item} />
        ))}
      </section>
    </div>
  );
};

export default SearchPage;
