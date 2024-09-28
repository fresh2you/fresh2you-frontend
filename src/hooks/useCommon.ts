import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useCommon = () => {
  const navigate = useNavigate();
  const [previewAvatar, setPreviewAvatar] = useState("");

  const goBack = (fallbackRoute?: string) => {
    const hasBrowserStacks = window.history.length > 1;

    if (hasBrowserStacks) navigate(-1);
    else if (fallbackRoute) navigate(fallbackRoute);
    else navigate("/");
  };

  const extractUrlFromImageFile = (file: File) => {
    if (file.type.includes("image")) {
      if (previewAvatar) {
        URL.revokeObjectURL(previewAvatar);
        setPreviewAvatar("");
      }

      const newPreviewUrl = URL.createObjectURL(file);
      setPreviewAvatar(newPreviewUrl);
    } else {
      return alert("이미지 파일만 업로드하세요!!!");
    }
  };

  return { goBack, previewAvatar, extractUrlFromImageFile };
};

export default useCommon;
