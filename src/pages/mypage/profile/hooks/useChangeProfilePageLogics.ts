import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import useCommon from "@/hooks/useCommon";
import { api } from "@/services/api";
import useMyPageLogics from "@/pages/mypage/mypage/hooks/useMyPageLogics";

const useChangeProfilePageLogics = () => {
  const queryClient = useQueryClient();
  const { goBack, previewAvatar, extractUrlFromImageFile } = useCommon();
  const { userInfo } = useMyPageLogics();

  const { mutateAsync: patchUserProfile } = useMutation({
    mutationFn: async ({ nickname, image }: { nickname: string; image: File }) => {
      // 업데이트할 데이터 객체 생성
      const updateData: { nickname: string; image: File | null } = { nickname: userInfo.nickname, image: null };

      if (nickname) {
        updateData.nickname = nickname;
      }
      if (image) {
        updateData.image = image;
      }

      // 빈 객체가 아닌 경우에만 PATCH 요청을 보냄
      if (Object.keys(updateData).length > 0) {
        const result = await api.user.patchUserProfile(updateData);

        return result.success;
      }

      // 빈 문자열인 경우에는 null 반환
      return null;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      goBack();
    },
  });

  const [newProfile, setNewProfile] = useState<{ nickname: string; image: File | null }>({
    nickname: userInfo?.nickname ?? "",
    image: null,
  });

  const onChangeNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProfile((prev) => ({ ...prev, nickname: e.target.value }));
  };

  const onChangeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadFiles = e.target.files;

    if (uploadFiles) {
      const uploadedFile = uploadFiles[0];
      // form 데이터에 파일 등록
      setNewProfile((prev) => ({ ...prev, image: uploadedFile }));
      extractUrlFromImageFile(uploadedFile);
    }
  };

  return {
    userInfo,
    newProfile,
    previewAvatar,
    onChangeNicknameChange,
    onChangeFileChange,
    patchUserProfile,
  };
};

export default useChangeProfilePageLogics;
