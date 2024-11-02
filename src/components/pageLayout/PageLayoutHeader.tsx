import IconLeft from "icons/arrow-left.svg";
import { useAtomValue } from "jotai";
import { pageLayoutHeaderProps } from "@/stores/mypage";
import useCommon from "@/hooks/useCommon";

const PageLayoutHeader = () => {
  const { goBack } = useCommon();
  const { title, onBack, backRoute, hasConfirm, confirmText, onConfirm } = useAtomValue(pageLayoutHeaderProps);

  return (
    <header className="relative flex items-center justify-between w-full h-16 px-2">
      {/* 헤더 좌측 버튼 */}
      <button
        onClick={() => {
          goBack(backRoute);
          if (onBack) onBack();
        }}
        className="flex items-center h-full px-4 py-0 bg-transparent desktop:hidden"
      >
        <IconLeft className="h-5 text-custom-gray-dark" />
      </button>

      {/* 헤더 중앙 제목 */}
      <h1 className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">{title}</h1>

      {/* 헤더 우측 버튼 */}
      {hasConfirm && (
        <button
          className="h-full px-4 py-0 ml-auto font-semibold bg-transparent text-custom-gray-dark"
          onClick={() => {
            if (onConfirm) onConfirm();
          }}
        >
          {confirmText}
        </button>
      )}
    </header>
  );
};

export default PageLayoutHeader;
