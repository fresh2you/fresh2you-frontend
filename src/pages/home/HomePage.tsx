import useHomePageLogics from "@/pages/home/hooks/useHomePageLogics";
import Banner from "./component/Banner";

const HomePage = () => {
  const { recommendProductsByHistory, recommendProductsByRandom } = useHomePageLogics();

  return (
    <div className="w-full h-full overflow-y-scroll">
      {recommendProductsByHistory ? (
        <>
          <Banner title="자주 구매했던 상품들이에요!" products={recommendProductsByHistory} />
          <Banner title="이런 상품은 어떠세요?" products={recommendProductsByRandom} />
        </>
      ) : (
        <div className="w-full h-auto p-4">{"추천상품이 없습니다"}</div>
      )}
    </div>
  );
};

export default HomePage;
