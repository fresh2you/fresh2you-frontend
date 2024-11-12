import InputWithLabel from "@/components/InputWithLabel";
import { useRef } from "react";
import IconCamera from "icons/camera.svg";
import useChangeProfilePageLogics from "@/pages/mypage/profile/hooks/useChangeProfilePageLogics";
import BackButton from "@/components/BackButton";
import useHeaderProps from "@/hooks/useHeaderProps";
import IconAccount from "@/assets/icons/icon-account.svg";

const ChangeProfilePage = () => {
  useHeaderProps({
    title: "프로필 수정",
    hasConfirm: false,
    backRoute: "/mypage",
  });

  const { userInfo, newProfile, previewAvatar, onChangeFileChange, onChangeNicknameChange, patchUserProfile } =
    useChangeProfilePageLogics();
  const avatarRef = useRef<HTMLInputElement>(null);
  const backgroundImageStyle =
    previewAvatar || userInfo?.profileImage
      ? { backgroundImage: `url('${previewAvatar || userInfo?.profileImage}')` }
      : undefined;

  return (
    <div className="flex justify-center w-full h-full">
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          await patchUserProfile(newProfile);
        }}
        className="relative flex flex-col items-center justify-center w-2/3 h-full gap-6 pb-[4.5rem] max-w-80"
      >
        <label
          htmlFor="avatar"
          className={`flex center relative w-40 bg-cover border rounded-full aspect-square ${
            previewAvatar || userInfo?.profileImage || "bg-custom-gray-light border-custom-gray-dark"
          }`}
          style={backgroundImageStyle}
        >
          {!userInfo?.profileImage && <IconAccount className="w-3/4 h-3/4 text-custom-gray-dark" />}
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
        <button type="submit" className="w-full py-2 mt-auto font-bold text-white bg-custom-green">
          프로필 변경하기
        </button>
        <BackButton extraStyle=" " />
      </form>
    </div>
  );
};

export default ChangeProfilePage;
