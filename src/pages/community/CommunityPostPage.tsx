import { pageLayoutHeaderProps } from "@/stores/mypage";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

const CommunityPostPage = () => {
  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);

  useEffect(() => {
    setHeaderProps({
      title: "", // 나중에 데이터 받아와서 처리하기
      hasConfirm: false,
      backRoute: "/community",
    });
  }, [setHeaderProps]);

  return <div className="w-full h-full bg-red-300">CommunityPostPage</div>;
};

export default CommunityPostPage;
