import ProductForm from "./components/registration/ProductForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useHeaderProps from "@/hooks/useHeaderProps";

const ProductRegistrationPage = () => {
  useHeaderProps("", "../", false);
  return (
    <section className="flex flex-col items-center w-full min-h-screen text-custom-black">
      <div className="flex flex-col mobile:w-full tablet-sm:w-3/5 tablet-sm:min-w-[447px] tablet-sm:max-w-[540px]">
        <h1 className="mb-6 font-bold text-center text-custom-h2 text-custom-green">상품을 등록해요</h1>
        <ProductForm />
      </div>
      <ToastContainer />
    </section>
  );
};

export default ProductRegistrationPage;
