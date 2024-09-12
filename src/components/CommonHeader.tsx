import { useNavigate } from "react-router-dom";
import IconLeft from "icons/arrow-left.svg";

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

type CommonHeaderProps = CommonHeaderWithConfirm | CommonHeaderWithoutConfirm;

const CommonHeader = ({ title, onBack, hasConfirm, confirmText, onConfirm }: CommonHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="relative w-full h-14 px-2 flex justify-between items-center">
      {/* 헤더 좌측 버튼 */}
      <button
        onClick={() => {
          navigate(-1);
          if (onBack) onBack();
        }}
        className="h-full px-4 py-0 flex items-center bg-transparent"
      >
        <IconLeft className="h-5 text-custom-gray-dark" />
      </button>

      {/* 헤더 중앙 제목 */}
      <h1 className="absolute top-1/2 left-1/2 ransform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
        {title}
      </h1>

      {/* 헤더 우측 버튼 */}
      {hasConfirm && (
        <button
          className="h-full px-4 py-0 bg-transparent text-custom-gray-dark font-semibold"
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
