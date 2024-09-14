import { useNavigate } from "react-router-dom";
import IconLeft from "icons/arrow-left.svg";
import { useAtomValue } from "jotai";
import { myPageHeaderProps } from "@/stores/mypage";

interface CommonHeaderBaseProps {
  title: string;
  onBack?: () => void;
}

interface CommonHeaderWithConfirm extends CommonHeaderBaseProps {
  hasConfirm: true; // hasConfirm이 true일 때
  confirmText: string; // confirmText는 필수
  onConfirm?: () => void;
}

interface CommonHeaderWithoutConfirm extends CommonHeaderBaseProps {
  hasConfirm: false; // hasConfirm이 false일 때
  confirmText?: null; // confirmText는 선택
  onConfirm?: null;
}

export type CommonHeaderProps = CommonHeaderWithConfirm | CommonHeaderWithoutConfirm;

const CommonHeader = () => {
  const navigate = useNavigate();
  const { title, onBack, hasConfirm, confirmText, onConfirm } = useAtomValue(myPageHeaderProps);

  return (
    <header className="relative flex items-center justify-between w-full px-2 h-14">
      {/* 헤더 좌측 버튼 */}
      <button
        onClick={() => {
          navigate(-1);
          if (onBack) onBack();
        }}
        className="flex items-center h-full px-4 py-0 bg-transparent"
      >
        <IconLeft className="h-5 text-custom-gray-dark" />
      </button>

      {/* 헤더 중앙 제목 */}
      <h1 className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ransform">
        {title}
      </h1>

      {/* 헤더 우측 버튼 */}
      {hasConfirm && (
        <button
          className="h-full px-4 py-0 font-semibold bg-transparent text-custom-gray-dark"
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

export default CommonHeader;
