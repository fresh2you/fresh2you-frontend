import InputWithLabel from "@/components/InputWithLabel";

import { pageLayoutHeaderProps } from "@/stores/mypage";
import { useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import IconCamera from "icons/camera.svg";
import useChangeProfilePageLogics from "@/pages/mypage/profile/hooks/useChangeProfilePageLogics";
import BackButton from "@/components/BackButton";

const ChangeProfilePage = () => {
  const setHeaderProps = useSetAtom(pageLayoutHeaderProps);
  const { userInfo, newProfile, previewAvatar, onChangeFileChange, onChangeNicknameChange, patchUserProfile } =
    useChangeProfilePageLogics();
  const avatarRef = useRef<HTMLInputElement>(null);
  const backgroundImageStyle =
    previewAvatar || userInfo?.image ? { backgroundImage: `url('${previewAvatar || userInfo?.image}')` } : undefined;

  useEffect(() => {
    setHeaderProps({
      title: "프로필 수정",
      hasConfirm: false,
      backRoute: "/mypage",
    });
  }, [setHeaderProps]);

  return (
    <div className="flex justify-center w-full h-full pb-[4.5rem]">
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          await patchUserProfile({ nickname: newProfile.nickname, avatar: previewAvatar });
        }}
        className="relative flex flex-col items-center justify-center w-2/3 h-full gap-6 pb-20 max-w-80"
      >
        <label
          htmlFor="avatar"
          className={`relative w-40 bg-cover border rounded-full aspect-square ${
            previewAvatar || userInfo?.image || "bg-custom-gray-light border-custom-gray-dark"
          }`}
          style={backgroundImageStyle}
        >
          <IconCamera className="absolute bottom-0 right-0 p-1 bg-white border rounded-full text-custom-gray-dark border-custom-gray-dark" />
        </label>

        <input
          id="avatar"
          className="hidden"
          type="file"
          accept="image/jpg, image/jpeg, image/png, image/webp"
          capture="environment"
          ref={avatarRef}
          onChange={onChangeFileChange}
        />

        <InputWithLabel
          id={"nickname"}
          label={"닉네임 변경"}
          type={"text"}
          value={newProfile.nickname}
          placeholder={userInfo?.nickname || "변경하실 닉네임을 알려주세요"}
          onChange={onChangeNicknameChange}
        />
        <button type="submit" className="absolute bottom-0 w-full py-2 font-bold text-white bg-custom-green">
          프로필 변경하기
        </button>
        <BackButton extraStyle="absolute bottom-14" />
      </form>
    </div>
  );
};

export default ChangeProfilePage;
