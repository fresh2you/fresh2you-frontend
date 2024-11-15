import HomeButton from "@/components/HomeButton";
const ItemNotFound = () => {
  return (
    <section className="flex flex-col items-center h-full pt-2">
      <h3 className="text-custom-h3 whitespace-nowrap text-custom-gray-dark">해당 상품을 찾을 수 없습니다.</h3>
      <HomeButton className="mt-6 text-white transition bg-custom-green hover:bg-custom-green-hover hover:text-white" />
    </section>
  );
};

export default ItemNotFound;
