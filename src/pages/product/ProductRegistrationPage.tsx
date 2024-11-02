import ProductForm from "./components/registration/ProductForm";
import "react-toastify/dist/ReactToastify.css";
import useHeaderProps from "@/hooks/useHeaderProps";
import useWindowResize from "./hooks/useWindowResize";

const ProductRegistrationPage = () => {
  const isDesktop = useWindowResize(1024);

  useHeaderProps({
    title: isDesktop ? "" : "상품 등록하기",
    backRoute: "../",
    hasConfirm: false,
    confirmText: null,
    onConfirm: null,
  });

  return (
    <section className={`flex flex-col items-center w-full min-h-screen text-custom-black ${!isDesktop ? "pt-2" : ""}`}>
      <div className="flex flex-col mobile:w-full tablet-sm:w-3/5 tablet-sm:min-w-[447px] tablet-sm:max-w-[540px]">
        {isDesktop && <h1 className="mb-6 font-bold text-center text-custom-h2 text-custom-green">상품을 등록해요</h1>}
        <ProductForm />
      </div>
    </section>
  );
};

export default ProductRegistrationPage;
