import useCommon from "@/hooks/useCommon";

const BackButton = ({ extraStyle }: { extraStyle?: string }) => {
  const { goBack } = useCommon();

  return (
    <button
      type="button"
      className={`w-full py-2 font-bold text-white bg-custom-gray-light ${extraStyle}`}
      onClick={() => goBack()}
    >
      뒤로가기
    </button>
  );
};

export default BackButton;
