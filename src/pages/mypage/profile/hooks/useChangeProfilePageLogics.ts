import { instance } from "@/instance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import useCommon from "@/hooks/useCommon";

const useChangeProfilePageLogics = () => {
  const queryClient = useQueryClient();
  const { goBack, previewAvatar, extractUrlFromImageFile } = useCommon();

  const { data: userInfo } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const { data: result } = await instance.get("/userInfo");

      return result;
    },
    enabled: true,
    staleTime: 60 * 1000,
  });

  const { mutateAsync: patchUserProfile } = useMutation({
    mutationFn: async ({ nickname, avatar }: { nickname: string; avatar: string }) => {
      // 업데이트할 데이터 객체 생성
      const updateData: { nickname?: string; image?: string } = {};

      if (nickname) {
        updateData.nickname = nickname;
      }
      if (avatar) {
        updateData.image = avatar;
      }

      // 빈 객체가 아닌 경우에만 PATCH 요청을 보냄
      if (Object.keys(updateData).length > 0) {
        const result = await instance.patch("/userInfo", updateData);
        return result;
      }

      // 빈 문자열인 경우에는 null 반환
      return null;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      goBack();
    },
  });

  const [newProfile, setNewProfile] = useState<{ nickname: string; avatar: File | null }>({
    nickname: userInfo?.nickname ?? "",
    avatar: null,
  });

  const onChangeNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProfile((prev) => ({ ...prev, nickname: e.target.value }));
  };

  const onChangeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadFiles = e.target.files;

    if (uploadFiles) {
      const uploadedFile = uploadFiles[0];
      // form 데이터에 파일 등록
      setNewProfile((prev) => ({ ...prev, avatar: uploadedFile }));
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
